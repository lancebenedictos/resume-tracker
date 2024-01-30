import { BASE } from "@/constant/apiBase";
// import Job from "@/models/Job";
import UserJobs from "@/models/UserJobs";
import axios from "axios";

export const createResume = async (resumeId: string): Promise<UserJobs> => {
  const res = await axios.get(`${BASE}/resume/${resumeId}`, {
    withCredentials: true,
  });

  return res.data;
};
