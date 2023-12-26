// type Job = {
//   job_id: string;
//   employer_name?: string;
//   employer_logo?: string;
//   employer_website?: string;
//   job_publisher?: string;
//   job_employment_type?: string;
//   job_title?: string;
//   job_apply_link?: string;
//   job_google_link?: string;
//   apply_options?: [
//     {
//       publisher: string;
//       apply_link: string;
//     }
//   ];
//   job_description?: string;
//   job_is_remote?: string;
//   job_posted_at_datetime_utc?: string;
//   job_city?: string;
//   job_state?: string;
//   job_country?: string;
//   job_latitude?: number;
//   job_longitude?: number;
//   job_benefits?: string;
//   job_offer_expiration_datetime_utc?: string;
//   job_required_education?: {
//     postgraduate_degree: boolean;
//     professional_certification: boolean;
//     high_school: boolean;
//     associates_degree: boolean;
//     bachelors_degree: boolean;
//     degree_mentioned: boolean;
//     degree_preferred: boolean;
//   };
//   job_required_experience?: {
//     no_experience_required: boolean;
//     required_experience_in_months: number;
//     experience_mentioned: boolean;
//     experience_preferred: boolean;
//   };
//   job_naics_name?: string;
//   // Resume field
// };
type Job = {
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
  job_highlights?: Record<string, any> | null;
  job_job_title?: string | null;
  job_posting_language?: string;
  job_onet_soc?: string;
  job_onet_job_zone?: string;
};

export default Job;
