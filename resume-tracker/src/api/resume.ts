import { BASE } from "@/constant/apiBase";
import Job from "@/models/Job";
import axios from "axios";

export const createResume = async (resumeId: string): Promise<Job> => {
  const res = await axios.get(`${BASE}/resume/${resumeId}`, {
    withCredentials: true,
  });

  return res.data.resume;
};
