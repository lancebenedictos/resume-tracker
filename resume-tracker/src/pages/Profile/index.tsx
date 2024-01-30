import { Button } from "@/components/ui/button";

import useUser from "@/hooks/useUser";
import { useReducer } from "react";
import reducer from "./reducer/profileReducer";

import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/api/user";
import ResumeForm from "./ResumeForm";

function Index() {
  const { user, isError, isLoading } = useUser();
  const [state, dispatch] = useReducer(reducer, user);
  // const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationKey: ["user"],
    mutationFn: updateUser,
  });

  if (!state) return;
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;

  // have all data
  return (
    <div className="  pt-4">
      <div className="w-[80%] flex justify-between  mx-auto items-center">
        <p className=" font-bold text-xl">Profile</p>
        <Button
          onClick={() => {
            mutation.mutate(state);
          }}
        >
          Save
        </Button>
      </div>

      <ResumeForm state={state} dispatch={dispatch} />
    </div>
  );
}

export default Index;
