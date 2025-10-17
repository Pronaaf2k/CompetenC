# CompetenC - Google OAuth Authentication Setup

This document provides instructions for setting up Google OAuth authentication with your CompetenC application.

## Prerequisites

1. A Supabase project created at [supabase.com](https://supabase.com)
2. A Google Cloud Console project with OAuth 2.0 credentials
3. Environment variables configured in your `.env.local` file

## Environment Variables

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Google OAuth Setup

### 1. Google Cloud Console Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `https://your-project-ref.supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/callback` (for development)

### 2. Supabase Configuration

1. Go to your Supabase project dashboard
2. Navigate to Authentication → Providers
3. Enable Google provider
4. Add your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Set redirect URL to: `https://your-project-ref.supabase.co/auth/v1/callback`

## Database Setup

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands from `supabase-schema.sql` to create the necessary tables and policies

## Authentication Configuration

### Site URL and Redirect URLs

In Authentication > Settings, configure:

1. **Site URL**: `http://localhost:3000` (for development)
2. **Redirect URLs**: 
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/profile-completion`

### Email Provider (Optional)

Since we're using Google OAuth, email verification is handled by Google. However, you can still configure email providers for:
- Password reset emails (if you add email/password auth later)
- Admin notifications

## Features Implemented

### Authentication Pages

- **Login** (`/login`) - Google OAuth sign-in only
- **Signup** (`/signup`) - Google OAuth sign-up only
- **Profile Completion** (`/profile-completion`) - Complete profile after Google sign-in
- **Auth Error** (`/auth/auth-code-error`) - Handle authentication errors

### User Management

- **Google OAuth Integration**: Seamless sign-in with Google accounts
- **Profile Completion Flow**: Users select role and complete profile after first sign-in
- **User Types**: Student, Company Representative, Admin
- **Student Fields**: University, Major, Academic Year
- **Company Fields**: Company Name

### Security Features

- **OAuth 2.0 Flow**: Secure authentication via Google
- **Row Level Security (RLS)** enabled on all tables
- **JWT-based authentication** with Supabase
- **Protected routes** with middleware
- **Automatic profile creation** on signup

## Usage

### Sign Up Flow

1. User visits `/signup`
2. Clicks "Continue with Google"
3. Redirected to Google OAuth
4. After Google authentication, redirected to `/profile-completion`
5. User selects role and completes profile
6. Redirected to appropriate dashboard

### Sign In Flow

1. User visits `/login`
2. Clicks "Continue with Google"
3. Redirected to Google OAuth
4. If profile is complete, redirected to dashboard
5. If profile incomplete, redirected to `/profile-completion`

### Profile Completion Flow

1. User completes Google OAuth
2. If first time, redirected to `/profile-completion`
3. Selects user type (Student/Company)
4. Fills in role-specific information
5. Profile saved to database
6. Redirected to appropriate dashboard

## API Integration

The authentication context provides these methods:

```typescript
const { user, session, loading, signInWithGoogle, signUpWithGoogle, signOut } = useAuth();
```

### Example Usage

```typescript
// Sign in with Google
const { data, error } = await signInWithGoogle();

// Sign up with Google
const { data, error } = await signUpWithGoogle();

// Sign out
await signOut();

// Check user type
const userType = user?.user_metadata?.userType;
```

## Database Schema

### Tables Created

1. **profiles** - User profile information
2. **challenges** - Competition challenges
3. **submissions** - Student submissions

### Key Features

- **Automatic profile creation** on Google OAuth signup
- **Row Level Security** for data protection
- **Automatic timestamps** for created_at/updated_at
- **Foreign key constraints** for data integrity
- **Google OAuth metadata** handling

## Troubleshooting

### Common Issues

1. **"Invalid OAuth client"**
   - Check Google Cloud Console credentials
   - Verify redirect URIs match exactly
   - Ensure Google+ API is enabled

2. **"Redirect URI mismatch"**
   - Check Supabase redirect URL configuration
   - Verify Google Cloud Console redirect URIs
   - Ensure no trailing slashes

3. **"Profile completion loop"**
   - Check user metadata in Supabase
   - Verify profile completion logic
   - Check middleware redirects

4. **"Row Level Security" errors**
   - Ensure RLS policies are properly configured
   - Check user authentication status
   - Verify user metadata structure

### Development Tips

1. Use Supabase dashboard to monitor auth events
2. Check browser network tab for OAuth redirects
3. Verify environment variables are loaded
4. Test with different Google accounts
5. Check user metadata in Supabase auth.users table

## Production Deployment

1. Update Google Cloud Console redirect URIs to production domain
2. Update Supabase site URL to production domain
3. Configure production redirect URLs in Supabase
4. Set up proper CORS settings
5. Enable Google OAuth in production Supabase project

## Security Considerations

1. **Never expose OAuth secrets** in client-side code
2. **Use environment variables** for all sensitive data
3. **Enable RLS** on all user data tables
4. **Validate user input** on both client and server
5. **Use HTTPS** in production
6. **Regular security audits** of Supabase policies
7. **Monitor OAuth usage** for suspicious activity
