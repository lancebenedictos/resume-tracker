import ResumeInfo from "./ResumeInfo";

type Job = {
  resume_info?: ResumeInfo;
  cover_letter?: string;
  _id?: string;
  employer_name?: string;
  employer_logo?: string | null;
  employer_website?: string | null;
  employer_company_type?: string | null;
  job_publisher?: string;
  job_id?: string;
  job_employment_type?: string | null;
  job_title?: string;
  job_apply_link?: string | null;
  job_apply_is_direct?: boolean | null;
  job_apply_quality_score?: number | null;
  apply_options?: Array<{
    publisher?: string;
    apply_link?: string;
    is_direct?: boolean | null;
  }> | null;
  job_description?: string;
  job_is_remote?: boolean | null;
  job_posted_at_timestamp?: number | null;
  job_posted_at_datetime_utc?: string | null;
  job_city?: string | null;
  job_state?: string | null;
  job_country?: string | null;
  job_latitude?: number | null;
  job_longitude?: number | null;
  job_benefits?: string | null;
  job_google_link?: string | null;
  job_offer_expiration_datetime_utc?: string | null;
  job_offer_expiration_timestamp?: number | null;
  job_required_experience?: {
    no_experience_required?: boolean | null;
    required_experience_in_months?: number | null;
    experience_mentioned?: boolean | null;
    experience_preferred?: boolean | null;
  } | null;
  job_required_skills?: string[] | null;
  job_required_education?: {
    postgraduate_degree?: boolean | null;
    professional_certification?: boolean | null;
    high_school?: boolean | null;
    associates_degree?: boolean | null;
    bachelors_degree?: boolean | null;
    degree_mentioned?: boolean | null;
    degree_preferred?: boolean | null;
    professional_certification_mentioned?: boolean | null;
  } | null;
  job_experience_in_place_of_education?: boolean | null;
  job_min_salary?: number | null;
  job_max_salary?: number | null;
  job_salary_currency?: string | null;
  job_salary_period?: string | null;
  job_job_title?: string | null;
  job_posting_language?: string;
};

export default Job;
