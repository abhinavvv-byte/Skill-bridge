import { Opportunity, Program, StudentProfile, Connect } from '../types';

export const mockStudent: StudentProfile = {
  id: 's1',
  name: 'Alex Johnson',
  university: 'Tech University',
  department: 'Computer Science',
  year: '3rd Year',
  skills: [
    { skill: 'React', level: 'Strong', score: 90 },
    { skill: 'Node.js', level: 'Developing', score: 65 },
    { skill: 'DSA', level: 'Strong', score: 85 },
    { skill: 'SQL', level: 'Weak', score: 30 },
    { skill: 'Cloud', level: 'Missing', score: 10 },
  ],
  codingProfiles: [
    { platform: 'LeetCode', handle: 'alexj', problemsSolved: 342, rating: '1850' },
    { platform: 'GitHub', handle: 'alex-codes', problemsSolved: 45, rating: 'Active' },
    { platform: 'HackerRank', handle: 'alex_hacker', problemsSolved: 120, rating: '5 Star' }
  ],
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack platform with React and Node.js',
      techStack: ['React', 'Node.js', 'MongoDB'],
      link: 'github.com/alex/ecommerce'
    }
  ],
  experience: [
    {
      title: 'Frontend Intern',
      organization: 'WebSolutions Inc.',
      duration: 'Summer 2025',
      description: 'Developed responsive UI components using React and Tailwind.'
    }
  ]
};

export const mockOpportunities: Opportunity[] = [
  {
    id: 'o1',
    companyName: 'Global Tech',
    role: 'Frontend Developer Intern',
    type: 'Internship',
    requiredSkills: ['React', 'JavaScript', 'CSS'],
    eligibility: 'B.Tech 3rd/4th Year',
    location: 'Remote',
    salary: '$3000/mo',
    deadline: '2026-10-01',
    experience: '0-1 years',
    matchScore: 92
  },
  {
    id: 'o2',
    companyName: 'DataCorp',
    role: 'Backend Engineer',
    type: 'Full-time',
    requiredSkills: ['Node.js', 'SQL', 'Cloud'],
    eligibility: 'B.Tech Graduates',
    location: 'New York, NY',
    salary: '$110k/yr',
    deadline: '2026-11-15',
    experience: '1+ years',
    matchScore: 45
  },
  {
    id: 'o3',
    companyName: 'GovTech Dept',
    role: 'Digital Innovation Fellow',
    type: 'Government',
    requiredSkills: ['Python', 'Data Analysis'],
    eligibility: 'Open to all',
    location: 'Washington DC',
    salary: '$5000/mo',
    deadline: '2026-10-20',
    experience: '0 years',
    matchScore: 60
  }
];

export const mockPrograms: Program[] = [
  {
    id: 'p1',
    title: 'Advanced React Patterns',
    provider: 'Frontend Masters',
    type: 'Online',
    category: 'Course',
    skillsGained: ['React', 'Performance'],
    duration: '4 Weeks'
  },
  {
    id: 'p2',
    title: 'Cloud Computing Essentials',
    provider: 'Tech University',
    type: 'Institution',
    category: 'Workshop',
    skillsGained: ['AWS', 'Cloud Architecture'],
    duration: '2 Days'
  },
  {
    id: 'p3',
    title: 'Mock Interview: DSA',
    provider: 'Tech University',
    type: 'Institution',
    category: 'Mock Interview',
    skillsGained: ['Problem Solving', 'Communication'],
    duration: '1 Hour'
  }
];

export const mockConnects: Connect[] = [
  {
    id: 'c1',
    fromId: 'comp1',
    fromType: 'Company',
    toId: 's1',
    toType: 'Student',
    status: 'Pending',
    message: 'We were impressed by your React skills and LeetCode profile. Would you be interested in our Frontend Internship?',
    type: 'Candidate Invite'
  },
  {
    id: 'c2',
    fromId: 'inst1',
    fromType: 'Institution',
    toId: 's1',
    toType: 'Student',
    status: 'Accepted',
    message: 'Your SQL skills are lagging behind market demand. Please enroll in the upcoming Database workshop.',
    type: 'Mentorship'
  }
];
