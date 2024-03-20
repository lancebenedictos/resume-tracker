import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/api/user";
import ResumeForm from "./ResumeForm";
import ProfileForm from "./ProfileForm";

import ResumeInfo, { PersonalInfo } from "@/models/ResumeInfo";

function Index() {
  const { user: data, isError, isLoading, status } = useUser();

  const mutation = useMutation({
    mutationKey: ["user"],
    mutationFn: updateUser,
  });

  const [personal_info, setPersonalInfo] = useState<PersonalInfo | undefined>(
    undefined
  );
  const [resume_info, setResume] = useState<ResumeInfo | undefined>(undefined);

  useEffect(() => {
    if (status === "success") {
      setPersonalInfo(data?.personal_info);
      setResume(data?.resume_info);
    }
  }, [status, data]);

  // if (!state) return;
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;

  // have all data
  return (
    <div className="  pt-4">
      <div className="w-[80%] flex justify-between  mx-auto items-center">
        <p className=" font-bold text-xl">Profile</p>
        <Button
          onClick={() => {
            if (personal_info && resume_info)
              mutation.mutate({ resume_info, personal_info });
          }}
        >
          Save
        </Button>
      </div>

      <main className="mx-auto w-[80%] profile">
        {personal_info && (
          <ProfileForm state={personal_info} setState={setPersonalInfo} />
        )}
        {resume_info && <ResumeForm state={resume_info} setState={setResume} />}
      </main>
    </div>
  );
}

export default Index;
