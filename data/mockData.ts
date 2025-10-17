export const mockChallenges = [
  {
    id: '1',
    title: 'Digital Marketing Strategy Challenge',
    company: 'TechCorp Solutions',
    companyLogo: '🏢',
    type: 'Case Study',
    description: 'Design a comprehensive digital marketing strategy for a new product launch',
    reward: '$5,000 + Internship',
    deadline: '2025-11-15',
    stages: ['Application', 'Case Submission', 'Presentation', 'Final Interview'],
    applicants: 327,
    status: 'active',
    visibility: 'public'
  },
  {
    id: '2',
    title: 'AI Innovation Hackathon',
    company: 'Qualcomm',
    companyLogo: '💻',
    type: 'Hackathon',
    description: 'Build an AI-powered solution for real-world problems',
    reward: '$10,000 + Job Offer',
    deadline: '2025-10-30',
    stages: ['Registration', 'Idea Submission', 'Prototype', 'Demo Day'],
    applicants: 892,
    status: 'active',
    visibility: 'public'
  },
  {
    id: '3',
    title: 'Sustainable Design Competition',
    company: 'EcoVentures',
    companyLogo: '🌱',
    type: 'Presentation',
    description: 'Create innovative sustainable product designs',
    reward: '$3,000 + Mentorship',
    deadline: '2025-11-01',
    stages: ['Submission', 'Review', 'Pitch'],
    applicants: 156,
    status: 'active',
    visibility: 'public'
  },
  {
    id: '4',
    title: 'Finance Case Challenge',
    company: 'Goldman Sachs',
    companyLogo: '💰',
    type: 'Case Study',
    description: 'Solve complex financial modeling scenarios',
    reward: 'Summer Analyst Position',
    deadline: '2025-11-20',
    stages: ['Application', 'Case Analysis', 'Virtual Interview'],
    applicants: 543,
    status: 'active',
    visibility: 'public'
  }
];

export const mockCompanies = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: '🏢',
    industry: 'Technology',
    email: 'hr@techcorp.com',
    activeChallenges: 3,
    totalApplicants: 1205,
    hiresThisYear: 15
  },
  {
    id: '2',
    name: 'Qualcomm',
    logo: '💻',
    industry: 'Electronics',
    email: 'careers@qualcomm.com',
    activeChallenges: 2,
    totalApplicants: 892,
    hiresThisYear: 8
  },
  {
    id: '3',
    name: 'EcoVentures',
    logo: '🌱',
    industry: 'Sustainability',
    email: 'talent@ecoventures.com',
    activeChallenges: 1,
    totalApplicants: 156,
    hiresThisYear: 3
  }
];

export const mockStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: '👨‍💼',
    university: 'MIT',
    year: '3rd Year',
    major: 'Computer Science',
    email: 'alex.j@mit.edu',
    points: 1250,
    rank: 15,
    badges: ['🏆 Top Performer', '💡 Innovator', '🎯 Problem Solver'],
    challengesJoined: 12,
    challengesCompleted: 8,
    resumeLink: '#'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: '👩‍💻',
    university: 'Stanford',
    year: '4th Year',
    major: 'Business Analytics',
    email: 'sarah.c@stanford.edu',
    points: 1450,
    rank: 8,
    badges: ['🥇 Winner', '⚡ Fast Learner', '🌟 Rising Star'],
    challengesJoined: 15,
    challengesCompleted: 13,
    resumeLink: '#'
  },
  {
    id: '3',
    name: 'Marcus Williams',
    avatar: '👨‍🎓',
    university: 'UC Berkeley',
    year: '2nd Year',
    major: 'Marketing',
    email: 'marcus.w@berkeley.edu',
    points: 980,
    rank: 23,
    badges: ['🎨 Creative', '📊 Data Driven'],
    challengesJoined: 8,
    challengesCompleted: 5,
    resumeLink: '#'
  }
];

export const mockApplications = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Alex Johnson',
    challengeId: '1',
    challengeTitle: 'Digital Marketing Strategy Challenge',
    university: 'MIT',
    stage: 'Final Interview',
    score: 92,
    status: 'In Progress',
    submittedAt: '2025-10-01',
    feedback: 'Excellent analytical skills demonstrated'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Sarah Chen',
    challengeId: '2',
    challengeTitle: 'AI Innovation Hackathon',
    university: 'Stanford',
    stage: 'Prototype',
    score: 95,
    status: 'In Progress',
    submittedAt: '2025-10-05',
    feedback: 'Outstanding innovation and technical execution'
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Marcus Williams',
    challengeId: '3',
    challengeTitle: 'Sustainable Design Competition',
    university: 'UC Berkeley',
    stage: 'Review',
    score: 88,
    status: 'Under Review',
    submittedAt: '2025-10-08',
    feedback: 'Creative approach with strong sustainability focus'
  }
];

export const mockTestimonials = [
  {
    id: '1',
    name: 'Jennifer Lee',
    role: 'HR Director at Microsoft',
    avatar: '👩‍💼',
    text: 'CompetenC transformed our hiring process. We found incredible talent through real challenges instead of just resumes.'
  },
  {
    id: '2',
    name: 'David Park',
    role: 'Student at Harvard',
    avatar: '👨‍🎓',
    text: 'I landed my dream internship by showcasing my skills in action. So much better than traditional applications!'
  },
  {
    id: '3',
    name: 'Maria Garcia',
    role: 'Founder at StartupX',
    avatar: '👩‍💻',
    text: 'The quality of candidates we get through CompetenC is exceptional. They prove themselves before we even interview.'
  }
];

export const challengeTypes = [
  {
    id: 'case',
    name: 'Case Study',
    icon: '📊',
    description: 'Solve real business problems and showcase analytical thinking'
  },
  {
    id: 'idea',
    name: 'Presentation',
    icon: '💡',
    description: 'Present innovative ideas and creative solutions'
  },
  {
    id: 'hackathon',
    name: 'Hackathon',
    icon: '💻',
    description: 'Build working prototypes and technical solutions'
  },
  {
    id: 'campaign',
    name: 'Campaign',
    icon: '📱',
    description: 'Create marketing campaigns and growth strategies'
  }
];
