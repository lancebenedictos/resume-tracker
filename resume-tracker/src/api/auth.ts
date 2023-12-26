import { BASE } from "@/constant/apiBase";
import User from "@/models/User";
import axios from "axios";

export const checkUser = async (): Promise<User> => {
  const res = await axios.get(`${BASE}/auth/check`, { withCredentials: true });

  return res.data.user;
};

export const signUp = async (user: User): Promise<User> => {
  const res = await axios.post(
    `${BASE}/auth/signup`,
    { ...user },
    { withCredentials: true }
  );
  return res.data.user;
};

export const logout = async (): Promise<User> => {
  const res = await axios.get(`${BASE}/auth/logout`, { withCredentials: true });
  return res.data.user;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await axios.post(
    `${BASE}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
  return res.data.user;
};
