export type OpportunityType = 'Internship' | 'Full-time' | 'Part-time' | 'Government' | 'Apprenticeship';

export interface Opportunity {
  id: string;
  companyName: string;
  role: string;
  type: OpportunityType;
  requiredSkills: string[];
  eligibility: string;
  location: string;
  salary: string;
  deadline: string;
  experience: string;
  matchScore?: number;
}

export interface Program {
  id: string;
  title: string;
  provider: string;
  type: 'Online' | 'Institution';
  category: 'Course' | 'Workshop' | 'Assessment' | 'Mock Interview' | 'Hackathon';
  skillsGained: string[];
  duration: string;
}

export interface SkillLevel {
  skill: string;
  level: 'Strong' | 'Developing' | 'Weak' | 'Missing';
  score: number; // 0-100
}

export interface StudentProfile {
  id: string;
  name: string;
  university: string;
  department: string;
  year: string;
  skills: SkillLevel[];
  codingProfiles: {
    platform: string;
    handle: string;
    problemsSolved: number;
    rating: string;
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
    link: string;
  }[];
  experience: {
    title: string;
    organization: string;
    duration: string;
    description: string;
  }[];
}

export interface Connect {
  id: string;
  fromId: string;
  fromType: 'Student' | 'Institution' | 'Company';
  toId: string;
  toType: 'Student' | 'Institution' | 'Company';
  status: 'Pending' | 'Accepted' | 'Declined';
  message: string;
  type: 'Opportunity Interest' | 'Candidate Invite' | 'Mentorship' | 'Skill Requirement';
}
