import { Input } from "@/components/ui/input";
import AddButton from "./common/AddButton";

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
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <Input
            key={index}
            className="px-3 bg-slate-100 rounded-md w-fit"
            value={skill}
            onChange={(e) => {
              skills[index] = e.target.value;
              updateSkills(skills);
            }}
            placeholder="Skill"
          ></Input>
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
