import { Input } from "@/components/ui/input";
import { Education as EducationType } from "@/models/ResumeInfo";
import { Label } from "@radix-ui/react-label";
import AddButton from "./common/AddButton";

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
        <div key={`ed-${idx}`} className="section mt-4">
          <span>
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
          });

          updateEducation(education);
        }}
      />
    </div>
  );
}

export default Education;
