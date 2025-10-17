-- CompetenC Database Schema for Supabase
-- Run these SQL commands in your Supabase SQL editor

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  user_type TEXT CHECK (user_type IN ('student', 'company', 'admin')),
  university TEXT,
  major TEXT,
  academic_year TEXT,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  company_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  requirements TEXT[],
  deadline TIMESTAMP WITH TIME ZONE,
  reward TEXT,
  is_public BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on challenges
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;

-- Create policies for challenges
CREATE POLICY "Anyone can view public challenges" ON challenges
  FOR SELECT USING (is_public = true);

CREATE POLICY "Companies can manage their challenges" ON challenges
  FOR ALL USING (auth.uid() = company_id);

-- Create submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  submission_text TEXT,
  submission_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  feedback TEXT,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(challenge_id, student_id)
);

-- Enable RLS on submissions
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for submissions
CREATE POLICY "Students can view own submissions" ON submissions
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Students can create submissions" ON submissions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Companies can view submissions for their challenges" ON submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM challenges 
      WHERE challenges.id = submissions.challenge_id 
      AND challenges.company_id = auth.uid()
    )
  );

CREATE POLICY "Companies can update submissions for their challenges" ON submissions
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM challenges 
      WHERE challenges.id = submissions.challenge_id 
      AND challenges.company_id = auth.uid()
    )
  );

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, user_type, university, major, academic_year, company_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'firstName', split_part(NEW.raw_user_meta_data->>'full_name', ' ', 1)),
    COALESCE(NEW.raw_user_meta_data->>'lastName', split_part(NEW.raw_user_meta_data->>'full_name', ' ', 2)),
    COALESCE(NEW.raw_user_meta_data->>'userType', 'student'),
    NEW.raw_user_meta_data->>'university',
    NEW.raw_user_meta_data->>'major',
    NEW.raw_user_meta_data->>'year',
    NEW.raw_user_meta_data->>'companyName'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_challenges_updated_at
  BEFORE UPDATE ON challenges
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_submissions_updated_at
  BEFORE UPDATE ON submissions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
