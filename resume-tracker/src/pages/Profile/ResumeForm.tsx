import Awards from "./Awards";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";
import { actionType } from "./reducer/profileReducer";
import {
  Award,
  Certification,
  Education as EducationType,
  JobExperience,
  PersonalInfo as PersonalInfoType,
  Project,
} from "@/models/ResumeInfo";
import { ActionTypes } from "./reducer/actions";
import User from "@/models/User";
import Languages from "./Languages";

type propType = {
  state: User | undefined;
  dispatch: (action: actionType) => void;
};

function ResumeForm({ state, dispatch }: propType) {
  function updateInfo(info: PersonalInfoType) {
    dispatch({ type: ActionTypes.SET_INFO, payload: info });
  }

  function updateSummary(summary: string) {
    dispatch({ type: ActionTypes.SET_SUMMARY, payload: summary });
  }

  function updateExperience(exp: [JobExperience]) {
    dispatch({ type: ActionTypes.SET_EXPERIENCE, payload: exp });
  }

  function updateEducation(ed: [EducationType]) {
    dispatch({ type: ActionTypes.SET_EDUCATION, payload: ed });
  }

  function updateSkills(skills: [string]) {
    dispatch({ type: ActionTypes.SET_SKILLS, payload: skills });
  }

  function updateCertifications(certs: [Certification]) {
    dispatch({ type: ActionTypes.SET_CERTIFICATION, payload: certs });
  }

  function updateAwards(awards: [Award]) {
    dispatch({ type: ActionTypes.SET_AWARD, payload: awards });
  }

  function updateProjects(projects: [Project]) {
    dispatch({ type: ActionTypes.SET_PROJECT, payload: projects });
  }

  function updateLanguages(langs: [string]) {
    dispatch({ type: ActionTypes.SET_LANGUAGES, payload: langs });
  }

  if (!state) return <p>User not found</p>;

  return (
    <main className="mx-auto w-[80%] profile">
      <PersonalInfo info={state.personal_info} updateInfo={updateInfo} />

      <hr className="my-4" />

      <Summary
        summary={state.resume_info.summary}
        updateSummary={updateSummary}
      />

      <hr className="my-4" />

      <Experience
        experiences={state.resume_info.job_experience}
        updateExperience={updateExperience}
      />

      <hr className="my-4" />

      <Education
        education={state.resume_info.education}
        updateEducation={updateEducation}
      />

      <hr className="my-4" />

      <Skills skills={state.resume_info.skills} updateSkills={updateSkills} />

      <hr className="my-4" />

      <Certifications
        certifications={state.resume_info.certifications}
        updateCertifications={updateCertifications}
      />

      <hr className="my-4" />

      <Awards awards={state.resume_info.awards} updateAwards={updateAwards} />

      <hr className="my-4" />

      <Projects
        projects={state.resume_info.projects}
        updateProjects={updateProjects}
      />

      <hr className="my-4" />

      <Languages
        languages={state.resume_info.languages}
        updateLanguages={updateLanguages}
      />
    </main>
  );
}

export default ResumeForm;
