import { BASE } from "@/constant/apiBase";
import Job from "@/models/Job";
import UserJobs from "@/models/UserJobs";
import axios from "axios";

export const searchJob = async (
  query: string,
  page: string
): Promise<Job[]> => {
  const res = await axios.get(`${BASE}/jobs`, {
    params: {
      query,
      page,
    },
  });
  return res.data.jobs;
};

export const saveJob = async (job: Job): Promise<Job> => {
  const res = await axios.post(
    `${BASE}/user/jobs`,
    { job },
    { withCredentials: true }
  );

  return res.data.job;
};

export const getUserJobs = async (page = 1): Promise<UserJobs[]> => {
  const res = await axios.get(`${BASE}/user/jobs/${page}`, {
    withCredentials: true,
  });
  return res.data.jobs;
};
