import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JobExperience } from "@/models/ResumeInfo";
import { Label } from "@radix-ui/react-label";
import AddButton from "./common/AddButton";
import { HiOutlineXMark } from "react-icons/hi2";

function formatDateToYYYYMMDD(date: Date) {
  // Ensure the input is a Date object
  if (!(date instanceof Date)) {
    throw new Error("Invalid date");
  }

  // Get the year, month, and day from the date
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");

  // Format the date as "yyyy-MM-dd"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function Experience({
  updateExperience,
  experiences,
}: {
  updateExperience: (experiences: [JobExperience]) => void;
  experiences: [JobExperience];
}) {
  return (
    <div>
      <h3>Experiences</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="section mt-4 hidden-delete">
          <div className="flex gap-4  items-center">
            <span className="flex-grow">
              <Label htmlFor="company">Company name</Label>
              <Input
                placeholder="Company name"
                id="company"
                type="text"
                value={exp.company}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  const exp = experiences[index];
                  exp.company = value;
                  experiences[index] = exp;
                  updateExperience(experiences);
                }}
              />
            </span>

            <button
              className="hidden-delete-btn px-2"
              onClick={() => {
                experiences.splice(index, 1);
                updateExperience(experiences);
              }}
            >
              <HiOutlineXMark />
            </button>
          </div>

          <span>
            <Label htmlFor="title">Title</Label>
            <Input
              placeholder="Title"
              id="title"
              type="text"
              value={exp.title}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const exp = experiences[index];
                exp.title = value;
                experiences[index] = exp;
                updateExperience(experiences);
              }}
            />
          </span>

          <span>
            <Label htmlFor="location">Location</Label>
            <Input
              placeholder="Mississauga, ON"
              id="location"
              type="text"
              value={exp.location}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const exp = experiences[index];
                exp.location = value;
                experiences[index] = exp;
                updateExperience(experiences);
              }}
            />
          </span>

          <span>
            <Label htmlFor="start_date">Start date</Label>
            <Input
              id="start_date"
              type="month"
              value={exp.start_date}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const exp = experiences[index];
                exp.start_date = value;
                experiences[index] = exp;
                updateExperience(experiences);
              }}
            />
          </span>

          <span>
            <Label htmlFor="end_date">End date</Label>
            <Input
              id="end_date"
              type="month"
              value={exp.end_date}
              onChange={(e) => {
                const { value } = e.currentTarget;
                console.log(value);
                const exp = experiences[index];
                exp.end_date = value;
                experiences[index] = exp;
                updateExperience(experiences);
              }}
            />
          </span>
          <span className="flex gap-2">
            <p>Responsibilities</p>
            <button
              className="bg-slate-200 aspect-square px-2 rounded-md"
              onClick={() => {
                experiences[index].responsibilities?.push("");
                updateExperience(experiences);
              }}
            >
              +
            </button>
          </span>
          {exp.responsibilities.map((resp, idx) => (
            <div className="hidden-btn flex gap-4 items-center">
              <Textarea
                key={`resp-${idx}`}
                value={resp}
                onChange={(e) => {
                  const exp = experiences[index];
                  exp.responsibilities[idx] = e.target.value;
                  experiences[index] = exp;
                  updateExperience(experiences);
                }}
              />

              <button
                className="hidden-delete-btn px-2"
                onClick={() => {
                  experiences[index].responsibilities.splice(idx, 1);
                  updateExperience(experiences);
                }}
              >
                <HiOutlineXMark />
              </button>
            </div>
          ))}

          <hr />
        </div>
      ))}
      <AddButton
        title="Add Experience"
        onClick={() => {
          experiences?.push({
            title: "",
            company: "",
            start_date: formatDateToYYYYMMDD(new Date()),
            responsibilities: new Array<string>(),
            location: "",
          });

          updateExperience(experiences);
        }}
      />
    </div>
  );
}

export default Experience;
