
export type Template = "modern" | "creative" | "minimal";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  profilePicture?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  location: string;
  achievements?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Skills {
  technical: string[];
  languages: string[];
  tools: string[];
  soft: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skills;
  certifications: Certification[];
  projects: Project[];
  hobbies: string[];
}
