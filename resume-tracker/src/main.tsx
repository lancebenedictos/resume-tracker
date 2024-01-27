import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyJobs from "./pages/MyJobs";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";

// import JobInfo from "./pages/JobInfo";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/jobs", element: <MyJobs /> },
      { path: "/account", element: <Account /> },
      { path: "/profile", element: <Profile /> },
      { path: "/resume/:id", element: <Resume /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
