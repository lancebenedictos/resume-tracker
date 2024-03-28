import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserJob } from "@/api/jobs";
import { useParams } from "react-router-dom";
import { createResume } from "@/api/resume";
import ResumeForm from "../Profile/ResumeForm";
import { useEffect, useState } from "react";

import ResumeInfo from "@/models/ResumeInfo";
import { DocumentCreator } from "@/lib/DocumentCreator";
import { Packer } from "docx";
import { saveAs } from "file-saver";
import Loader from "@/components/ui/Loader";

function Resume() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    data: job,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getUserJob(id || ""),
  });

  const [loading, setLoading] = useState(false);

  const [resume, setResume] = useState<ResumeInfo | undefined>(undefined);

  function generate() {
    const documentCreator = new DocumentCreator();
    if (resume && job?.user.personal_info) {
      const doc = documentCreator.create(resume, job?.user);
      Packer.toBlob(doc).then((blob) => saveAs(blob));
    }
  }

  useEffect(() => {
    if (status === "success") {
      setResume(job.resume_info);
    }
  }, [status, job]);

  const mutation = useMutation({
    mutationFn: createResume,
    onSuccess: (_data) => {
      setLoading(false);
      queryClient.setQueryData(["job", id], _data);
    },
  });

  if (isLoading || mutation.isPending) return <Loader />;

  if (!resume) return <h1>Job not found</h1>;

  return (
    <div className=" w-[80%] mx-auto">
      {loading && <Loader />}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setLoading(true);
            mutation.mutate(id!);
          }}
        >
          Generate resume
        </button>

        <button onClick={generate}>Download resume</button>
      </div>
      <div className="w-full">
        {/* <Preview job={job} ref={targetRef} /> */}
        {resume ? (
          <ResumeForm state={resume} setState={setResume} />
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    </div>
  );
}

export default Resume;
