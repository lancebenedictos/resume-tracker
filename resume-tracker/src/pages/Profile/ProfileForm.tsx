import { PersonalInfo as PersonalInfoType } from "@/models/ResumeInfo";
import PersonalInfo from "./PersonalInfo";

type propType = {
  state: PersonalInfoType;
  setState: (resume: PersonalInfoType) => void;
};

function ProfileForm({ state, setState }: propType) {
  function updateInfo(info: PersonalInfoType) {
    setState(info);
  }
  return <PersonalInfo info={state} updateInfo={updateInfo} />;
}

export default ProfileForm;
