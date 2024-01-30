import ResumeInfo from "./ResumeInfo";
import User from "./User";
type UserJobs = {
  _id: string;
  user: User;
  employer_name?: string;
  employer_logo?: string;
  employer_website?: string;
  job_publisher?: string;
  job_employment_type?: string;
  job_title?: string;
  job_apply_link?: string;
  job_google_link?: string;
  apply_options?: [
    {
      publisher: string;
      apply_link: string;
    }
  ];
  job_description?: string;
  job_is_remote?: string;
  job_posted_at_datetime_utc?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
  job_latitude?: number;
  job_longitude?: number;
  job_benefits?: string;
  job_offer_expiration_datetime_utc?: string;
  job_required_education?: {
    postgraduate_degree: boolean;
    professional_certification: boolean;
    high_school: boolean;
    associates_degree: boolean;
    bachelors_degree: boolean;
    degree_mentioned: boolean;
    degree_preferred: boolean;
  };
  job_required_experience?: {
    no_experience_required: boolean;
    required_experience_in_months: number;
    experience_mentioned: boolean;
    experience_preferred: boolean;
  };
  job_naics_name?: string;
  // Resume field
  resume_info?: ResumeInfo;
  // {
  //   contact_number: string;
  //   linkedin_link: string;
  //   portfolio_link: string;
  //   achievements: [string];
  //   job_experience: [
  //     {
  //       title: string;
  //       company: string;
  //       start_date: Date;
  //       end_date: Date;
  //       description: string;
  //     }
  //   ];
  //   skills: [string];
  //   education: [
  //     {
  //       degree: string;
  //       institution: string;
  //       graduation_year: number;
  //     }
  //   ];
  //   summary: string;
  //   awards: [
  //     {
  //       title: string;
  //       year: number;
  //       description: string;
  //     }
  //   ];
  // Add more fields as needed
  // };
  // Cover letter field
  cover_letter: string;
};

export default UserJobs;
