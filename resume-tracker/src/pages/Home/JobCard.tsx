import Job from "@/models/Job";
import DefaultImage from "../../assets/defaultImage.jpeg";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveJob } from "@/api/jobs";

type props = {
  job: Job;
};

function JobCard({ job }: props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: saveJob,
    onSuccess: (job, _, context: Job[]) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["organizer"] });
      alert("saved");

      queryClient.setQueryData(["jobs"], [...context, job]);
    },
  });
  const date = job.job_offer_expiration_datetime_utc
    ? new Date(job.job_offer_expiration_datetime_utc)
    : null;
  return (
    <div className="mb-4 shadow-md m-2 p-4">
      {/* Header */}
      <span className="flex justify-between">
        <h3 className=" font-bold text-lg mb-2">{job.job_title}</h3>
        <button onClick={() => mutation.mutate(job)}>Save</button>
      </span>
      <span className="flex items-center gap-2">
        <img
          src={job.employer_logo || DefaultImage}
          alt="Employer logo"
          className="w-[40px] aspect-square object-center"
        />
        <span className="">
          <p>{job.employer_name}</p>
          <span className="flex gap-2">
            <p>
              {job.job_city}, {job.job_state}
            </p>
            {job.job_is_remote && <Badge>Remote</Badge>}
          </span>
        </span>
      </span>
      {/* Header end */}

      <div className="border-2 flex flex-col p-2 rounded-md mt-2">
        {date && <p> Expiration: {date.toDateString()}</p>}

        <p className="mt-2">Apply options:</p>
        <ul className="mt-1">
          {job.apply_options?.map((opt, idx) => (
            <li key={idx} className="ml-4 text-blue-600 ">
              <a
                href={opt.apply_link}
                className="hover:underline"
                target="_blank"
              >
                {opt.publisher}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {job.job_description && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Job description</AccordionTrigger>
            <AccordionContent>
              <p className=" whitespace-pre-line mt-4">{job.job_description}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}

export default JobCard;
