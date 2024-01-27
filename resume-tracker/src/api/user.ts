import { BASE } from "@/constant/apiBase";
import User from "@/models/User";
import axios from "axios";

export const updateUser = async (user: User): Promise<User> => {
  const res = await axios.put(
    `${BASE}/user`,
    { ...user },
    { withCredentials: true }
  );
  console.log(res);
  return res.data.user;
};
