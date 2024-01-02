import User from "@/models/User";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/api/auth";

type props = { user: User | undefined; isError: boolean };
function RightPane({ user, isError }: props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
    },
  });
  return (
    <div className="flex ml-auto gap-4">
      {!user || isError ? (
        <span className="flex gap-4">
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Login</Link>
        </span>
      ) : (
        <>
          <Link to="/jobs">MyJobs</Link>
          <Link to="/profile">My profile</Link>
          <button onClick={() => mutation.mutate()}>Log out</button>
        </>
      )}
    </div>
  );
}

export default RightPane;
