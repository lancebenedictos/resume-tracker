import UserJobs from "@/models/UserJobs";
import { forwardRef } from "react";

type Props = { job: UserJobs };
const Preview = forwardRef<HTMLDivElement, Props>(
  ({ job }: Props, resumeRef) => {
    const linkedIn = job.user.personal_info.socials?.filter(
      (e) => e.name === "LinkedIn"
    )[0];

    const portfolio = job.user.personal_info.socials?.filter(
      (e) => e.name === "Portfolio"
    )[0];

    console.log(job);

    return (
      <div className="mx-auto w-fit shadow-lg p-[0.5in]">
        <div
          className=" font-serif leading-6  flex flex-col w-[8.3in] min-h-[11.7in]"
          ref={resumeRef}
        >
          <h1 className="text-[18pt] font-bold mb-2 mx-auto">
            {`${job.user.personal_info.first_name} ${job.user.personal_info.last_name}`}
          </h1>
          <p className=" text-[11pt] mx-auto">
            {`${job.user.personal_info.location} | ${job.user.personal_info.phone_number} | ${job.user.personal_info.email}`}
          </p>

          <span className=" text-[11pt] mx-auto flex gap-1">
            {linkedIn && <p> {`${linkedIn?.link}`}</p>}
            {portfolio && <p> {`| ${portfolio?.link}`}</p>}
          </span>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="w-full text-justify " contentEditable>
              {job.resume_info?.summary || "Summary"}
            </p>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <div className="flex gap-2 flex-wrap">
              {job.resume_info?.skills?.map((skill, index) => (
                <p contentEditable key={`${skill}-${index}`}>
                  {skill}
                </p>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Experience</h2>
            <div className="flex flex-col gap-4">
              {job.resume_info?.job_experience?.map((exp) => (
                <div key={exp._id}>
                  <div className="flex justify-between">
                    <p>
                      <span className=" font-bold">{exp.company}</span>,
                      {` ${exp.location}`}
                    </p>

                    <p>{`${exp.start_date} - ${exp.end_date || "Present"}`}</p>
                  </div>

                  <p>{exp.title}</p>
                  <ul className="list-disc px-4">
                    {exp.responsibilities.map((resp) => (
                      <li contentEditable>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Education</h2>

            <div className="flex flex-col gap-4">
              {job.resume_info?.education?.map((ed, idx) => (
                <div key={`ed-${idx}`}>
                  <span className="flex justify-between ">
                    <p>
                      <span className=" font-bold">{ed.degree}</span>,
                      {` ${ed.institution}`}
                    </p>

                    <p>{ed.graduation_year}</p>
                  </span>

                  <ul className="list-disc px-4">
                    {ed.info.map((info) => {
                      console.log(info);
                      return <li>{info}</li>;
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Awards</h2>
            <div className="flex flex-col gap-4">
              {job.resume_info?.awards?.map((award, index) => (
                <div key={`award-${index}`}>
                  <div className="flex justify-between">
                    <p className=" font-bold">{award.title}</p>
                    <p>{award.year}</p>
                  </div>

                  <p>{award.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            <div className="flex gap-4 flex-col">
              {job.resume_info?.projects?.map((project, index) => (
                <div key={`key-${index}`}>
                  <div className="flex justify-between">
                    <p className=" font-bold">{project.name}</p>
                    <p>{project.year}</p>
                  </div>

                  <p>{project.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">Languages</h2>

            <div className="flex gap-2">
              {job.resume_info?.languages?.map((lang) => (
                <p key={lang}>{lang}</p>
              ))}
            </div>
          </section>

          <section className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold mb-2">References</h2>
            <p>Available upon request.</p>
          </section>
        </div>
      </div>
    );
  }
);

export default Preview;
