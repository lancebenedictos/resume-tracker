import User from "@/models/User";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/api/auth";

type props = { user: User | undefined; isError: boolean };
function RightPane({ user, isError }: props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: (_data) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["organizer"] });
      queryClient.setQueryData(["organizer"], _data);
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
          <p>My profile</p>
          <button onClick={() => mutation.mutate()}>Log out</button>
        </>
      )}
    </div>
  );
}

export default RightPane;
