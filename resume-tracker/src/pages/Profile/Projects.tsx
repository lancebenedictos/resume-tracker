import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@/models/ResumeInfo";
import { Label } from "@radix-ui/react-label";
import AddButton from "./common/AddButton";

function Projects({
  updateProjects,
  projects,
}: {
  updateProjects: (project: [Project]) => void;
  projects: [Project];
}) {
  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={`project-${index}`} className="section mt-4">
          <span>
            <Label htmlFor="title">Name</Label>
            <Input
              placeholder="Project name"
              id="name"
              type="text"
              value={project.name}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const project = projects[index];
                project.name = value;
                projects[index] = project;
                updateProjects(projects);
              }}
            />
          </span>
          <span>
            <Label htmlFor="year">Year</Label>
            <Input
              placeholder="year"
              id="year"
              type="number"
              min="1900"
              max="2100"
              value={project.year}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const project = projects[index];
                project.year = value;
                projects[index] = project;
                updateProjects(projects);
              }}
            />
          </span>

          <span>
            <Label htmlFor="details">Details</Label>
            <Textarea
              placeholder="Project details"
              id="details"
              value={project.details}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const project = projects[index];
                project.details = value;
                projects[index] = project;
                updateProjects(projects);
              }}
            />
          </span>

          <hr />
        </div>
      ))}

      <AddButton
        onClick={() => {
          projects.push({ name: "", year: "2023", details: "" });
          updateProjects(projects);
        }}
        title="Add Project"
      />
    </div>
  );
}

export default Projects;
