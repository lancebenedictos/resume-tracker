import { BASE } from "@/constant/apiBase";
import axios from "axios";
import Job from "@/models/Job";
import UserJobs from "@/models/UserJobs";

export const searchJob = async (
  query: string,
  page: string,
  radius: number
): Promise<Job[]> => {
  const res = await axios.get(`${BASE}/jobs`, {
    params: {
      query,
      page,
      radius,
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
  const res = await axios.get(`${BASE}/user/jobs/page/${page}`, {
    withCredentials: true,
  });
  return res.data.jobs;
};

export const getUserJob = async (id: string): Promise<UserJobs> => {
  const res = await axios.get(`${BASE}/user/jobs/${id}`, {
    withCredentials: true,
  });
  return res.data.job;
};

export const deleteUserJob = async (id: string): Promise<UserJobs> => {
  const res = await axios.delete(`${BASE}/user/jobs/${id}`, {
    withCredentials: true,
  });
  return res.data.job;
};
