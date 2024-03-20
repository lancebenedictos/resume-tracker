import { Input } from "@/components/ui/input";
import AddButton from "./common/AddButton";
import { HiOutlineXMark } from "react-icons/hi2";

function Skills({
  updateSkills,
  skills,
}: {
  updateSkills: (skills: [string]) => void;
  skills: [string];
}) {
  return (
    <div>
      <h3>Skills</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <span
            key={`skill-${index}`}
            className="flex gap-2 flex-grow hidden-delete"
          >
            <Input
              className="px-3 bg-slate-100 rounded-md "
              value={skill}
              onChange={(e) => {
                skills[index] = e.target.value;
                updateSkills(skills);
              }}
              placeholder="Skill"
            ></Input>

            <button
              className="hidden-delete-btn px-2"
              onClick={() => {
                skills.splice(index, 1) as [string];
                updateSkills(skills);
              }}
            >
              <HiOutlineXMark />
            </button>
          </span>
        ))}
      </div>

      <AddButton
        title="Add Skill"
        onClick={() => {
          skills.push("");

          updateSkills(skills);
        }}
      />
    </div>
  );
}

export default Skills;
