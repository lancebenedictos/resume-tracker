import { useQuery } from "@tanstack/react-query";
import Preview from "./Preview";
import ResumeInfo from "./ResumeInfo";
import { getUserJob } from "@/api/jobs";
import { useParams } from "react-router-dom";

function Resume() {
  const { id } = useParams();
  const { data: job, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getUserJob(id || ""),
  });

  console.log(job);

  if (isLoading) return <h1>loading</h1>;
  return (
    <div className="flex">
      <ResumeInfo />
      <Preview />
    </div>
  );
}

export default Resume;
