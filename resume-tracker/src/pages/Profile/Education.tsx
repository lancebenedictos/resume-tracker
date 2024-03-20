import { Input } from "@/components/ui/input";
import { Education as EducationType } from "@/models/ResumeInfo";
import { Label } from "@radix-ui/react-label";
import AddButton from "./common/AddButton";
import { Textarea } from "@/components/ui/textarea";
import { HiOutlineXMark } from "react-icons/hi2";

function Education({
  updateEducation,
  education,
}: {
  updateEducation: (education: [EducationType]) => void;
  education: [EducationType];
}) {
  return (
    <div>
      <h3>Education</h3>
      {education.map((ed, idx) => (
        <div key={`ed-${idx}`} className="section mt-4 hidden-delete">
          <div className="flex gap-4 items-center">
            <span className="flex-grow">
              <Label htmlFor="degree">Degree</Label>
              <Input
                placeholder="Degree"
                id="degree"
                type="text"
                value={ed.degree}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  const ed = education[idx];
                  ed.degree = value;
                  education[idx] = ed;
                  updateEducation(education);
                }}
              />
            </span>

            <button
              className="hidden-delete-btn px-2"
              onClick={() => {
                education.splice(idx, 1);
                updateEducation(education);
              }}
            >
              <HiOutlineXMark />
            </button>
          </div>
          <span>
            <Label htmlFor="institution">Institution</Label>
            <Input
              placeholder="Institution"
              id="institution"
              type="text"
              value={ed.institution}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const ed = education[idx];
                ed.institution = value;
                education[idx] = ed;
                updateEducation(education);
              }}
            />
          </span>

          <span>
            <Label htmlFor="graduation_year">Graduation year</Label>
            <Input
              id="graduation_year"
              type="number"
              min="1900"
              max="2100"
              value={ed.graduation_year}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const ed = education[idx];
                ed.graduation_year = value;
                education[idx] = ed;
                updateEducation(education);
              }}
            />
          </span>

          <span className="flex gap-2">
            <p>Program information</p>
            <button
              className="bg-slate-200 aspect-square px-2 rounded-md"
              onClick={() => {
                education[idx].info?.push("");
                updateEducation(education);
              }}
            >
              +
            </button>
          </span>

          {ed.info.map((info, index) => (
            <div key={`resp-${index}`} className="flex gap-4 items-center">
              <Textarea
                value={info}
                onChange={(e) => {
                  const _ed = education[idx];
                  _ed.info[index] = e.target.value;
                  education[idx] = ed;
                  updateEducation(education);
                }}
              />
              <button
                className="hidden-delete-btn px-2"
                onClick={() => {
                  education[index].info.splice(idx, 1);
                  updateEducation(education);
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
        title="Add Education"
        onClick={() => {
          education.push({
            degree: "",
            institution: "",
            graduation_year: "2023",
            info: [],
          });

          updateEducation(education);
        }}
      />
    </div>
  );
}

export default Education;
