export type PersonalInfo = {
  first_name: string;
  last_name: string;
  location: string;
  phone_number: string;
  email: string;
  socials?: {
    name?: string;
    link?: string;
  }[];
};

export type Education = {
  degree: string;
  institution: string;
  graduation_year: string;
};

export type JobExperience = {
  title: string;
  company: string;
  start_date: string;
  end_date?: string;
  responsibilities: string[];
};

export type Award = {
  title: string;
  year: string;
  description: string;
};

export type Certification = {
  name?: string;
  year?: string;
};

export type Project = {
  name?: string;
  year?: string;
  details?: string;
};
type ResumeInfo = {
  personalInfo?: PersonalInfo;
  job_experience?: [JobExperience];
  skills?: [string];
  education?: [Education];
  summary?: string;
  awards?: [Award];
  certifications?: [Certification];
  projects?: [Project];
  languages?: [string];
};

export default ResumeInfo;
