import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Preview from "./Preview";
import { getUserJob } from "@/api/jobs";
import { useParams } from "react-router-dom";
import { createResume } from "@/api/resume";
import { usePDF } from "react-to-pdf";

function Resume() {
  const { id } = useParams();
  const { data: job, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getUserJob(id || ""),
  });
  const queryClient = useQueryClient();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const mutation = useMutation({
    mutationFn: createResume,
    onSuccess: (_data) => {
      console.log(_data);
      queryClient.setQueryData(["job", id], _data);
    },
  });

  // console.log(job);

  console.log(targetRef);

  if (isLoading || mutation.isPending) return <h1>loading</h1>;

  if (!job) return <h1>Job not found</h1>;
  return (
    <div className=" w-[80%] mx-auto">
      <div className="flex gap-2">
        <button
          onClick={() => {
            mutation.mutate(id!);
          }}
        >
          Generate resume
        </button>

        <button
          onClick={() => {
            toPDF();
          }}
        >
          Download resume
        </button>
      </div>
      <div className="w-full">
        <Preview job={job} ref={targetRef} />
      </div>
    </div>
  );
}

export default Resume;
