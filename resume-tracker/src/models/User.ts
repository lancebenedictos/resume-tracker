import {
  Award,
  Certification,
  Education,
  JobExperience,
  PersonalInfo,
  Project,
} from "./ResumeInfo";

type User = {
  personal_info: PersonalInfo;
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
