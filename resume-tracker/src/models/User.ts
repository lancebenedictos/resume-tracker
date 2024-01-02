import {
  Award,
  Certification,
  Education,
  JobExperience,
  Project,
} from "./ResumeInfo";

type User = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  socials: {
    name: string;
    link: string;
  }[];
  resume_info: {
    skills: [string];
    education: [Education];
    summary: string;
    awards: [Award];
    certifications: [Certification];
    projects: [Project];
    languages: string[];
    job_experience: [JobExperience];

    // Add more fields as needed
  };
};

export default User;
