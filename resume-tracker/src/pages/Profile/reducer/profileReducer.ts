import {
  Award,
  Certification,
  Education,
  JobExperience,
  PersonalInfo,
  Project,
} from "@/models/ResumeInfo";
import { ActionTypes } from "./actions";
import User from "@/models/User";

type setPersonalInfo = {
  type: ActionTypes.SET_INFO;
  payload: PersonalInfo;
};

type setEducation = {
  type: ActionTypes.SET_EDUCATION;
  payload: [Education];
};

type setExperience = {
  type: ActionTypes.SET_EXPERIENCE;
  payload: [JobExperience];
};

type setAward = {
  type: ActionTypes.SET_AWARD;
  payload: [Award];
};

type setCertification = {
  type: ActionTypes.SET_CERTIFICATION;
  payload: [Certification];
};

type setProject = {
  type: ActionTypes.SET_PROJECT;
  payload: [Project];
};

type setSkills = {
  type: ActionTypes.SET_SKILLS;
  payload: [string];
};

type setSummary = {
  type: ActionTypes.SET_SUMMARY;
  payload: string;
};

type setLanguages = {
  type: ActionTypes.SET_LANGUAGES;
  payload: [string];
};

type actionType =
  | setPersonalInfo
  | setEducation
  | setExperience
  | setAward
  | setCertification
  | setProject
  | setSkills
  | setSummary
  | setLanguages;

const reducer = (
  state: User | undefined,
  action: actionType
): User | undefined => {
  if (!state) return state;

  switch (action.type) {
    case ActionTypes.SET_AWARD:
      return {
        ...state,
        resume_info: { ...state?.resume_info, awards: action.payload },
      };
    case ActionTypes.SET_INFO:
      return {
        ...state,
        personal_info: { ...action.payload },
      };
    case ActionTypes.SET_EDUCATION:
      return {
        ...state,
        resume_info: { ...state?.resume_info, education: action.payload },
      };
    case ActionTypes.SET_EXPERIENCE:
      return {
        ...state,
        resume_info: { ...state?.resume_info, job_experience: action.payload },
      };
    case ActionTypes.SET_CERTIFICATION:
      return {
        ...state,
        resume_info: { ...state?.resume_info, certifications: action.payload },
      };
    case ActionTypes.SET_PROJECT:
      return {
        ...state,
        resume_info: { ...state?.resume_info, projects: action.payload },
      };
    case ActionTypes.SET_SKILLS:
      return {
        ...state,
        resume_info: { ...state?.resume_info, skills: action.payload },
      };
    case ActionTypes.SET_SUMMARY:
      return {
        ...state,
        resume_info: { ...state?.resume_info, summary: action.payload },
      };
    case ActionTypes.SET_LANGUAGES:
      return {
        ...state,
        resume_info: { ...state?.resume_info, languages: action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
