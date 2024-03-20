import Awards from "./Awards";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

import ResumeInfo, {
  Award,
  Certification,
  Education as EducationType,
  JobExperience,
  Project,
} from "@/models/ResumeInfo";

import Languages from "./Languages";

type propType = {
  state: ResumeInfo;
  setState: (resume: ResumeInfo) => void;
};

function ResumeForm({ state, setState }: propType) {
  function updateSummary(summary: string) {
    setState({ ...state, summary });
  }

  function updateExperience(job_experience: [JobExperience]) {
    setState({ ...state, job_experience });
  }

  function updateEducation(education: [EducationType]) {
    setState({ ...state, education });
  }

  function updateSkills(skills: [string]) {
    setState({ ...state, skills });
  }

  function updateCertifications(certifications: [Certification]) {
    setState({ ...state, certifications });
  }

  function updateAwards(awards: [Award]) {
    setState({ ...state, awards });
  }

  function updateProjects(projects: [Project]) {
    setState({ ...state, projects });
  }

  function updateLanguages(languages: [string]) {
    setState({ ...state, languages });
  }

  return (
    <main>
      <hr className="my-4" />

      <Summary summary={state.summary} updateSummary={updateSummary} />

      <hr className="my-4" />

      <Experience
        experiences={state.job_experience}
        updateExperience={updateExperience}
      />

      <hr className="my-4" />

      <Education
        education={state.education}
        updateEducation={updateEducation}
      />

      <hr className="my-4" />

      <Skills skills={state.skills} updateSkills={updateSkills} />

      <hr className="my-4" />

      <Certifications
        certifications={state.certifications}
        updateCertifications={updateCertifications}
      />

      <hr className="my-4" />

      <Awards awards={state.awards} updateAwards={updateAwards} />

      <hr className="my-4" />

      <Projects projects={state.projects} updateProjects={updateProjects} />

      <hr className="my-4" />

      <Languages
        languages={state.languages}
        updateLanguages={updateLanguages}
      />
    </main>
  );
}

export default ResumeForm;
