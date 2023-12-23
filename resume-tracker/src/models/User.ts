type User = {
  email: string;
  first_name: string;
  last_name: string;
  resume_info?: {
    contact_number?: number;
    linkedin_link?: string;
    portfolio_link?: string;
    achievements?: [string];
    job_experience?: [
      {
        title: string;
        company: string;
        start_date?: Date;
        end_date: Date;
        description: string;
      }
    ];
    skills?: [string];
    education?: [
      {
        degree: string;
        institution: string;
        graduation_year: number;
      }
    ];
    summary?: string;
    awards?: [
      {
        title: string;
        year: number;
        description: string;
      }
    ];
    // Add more fields as needed
  };
};

export default User;
