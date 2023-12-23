import User from "@/models/User";
import axios from "axios";
const base =
  process.env.NODE_ENV === "production"
    ? "https://event-snap-18da04b7e300.herokuapp.com/api"
    : "http://localhost:3000/api";

export const checkUser = async (): Promise<User> => {
  const res = await axios.get(`${base}/auth/check`, { withCredentials: true });

  return res.data.user;
};

export const signUp = async (user: User): Promise<User> => {
  const res = await axios.post(
    `${base}/auth/signup`,
    { ...user },
    { withCredentials: true }
  );
  return res.data.user;
};

export const logout = async (): Promise<User> => {
  const res = await axios.get(`${base}/auth/logout`, { withCredentials: true });
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
    `${base}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
  return res.data.user;
};
