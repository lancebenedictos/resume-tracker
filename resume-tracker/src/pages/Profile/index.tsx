import { Button } from "@/components/ui/button";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Awards from "./Awards";
import Projects from "./Projects";
import Languages from "./Languages";
import useUser from "@/hooks/useUser";
import { useReducer } from "react";
import reducer from "./reducer/profileReducer";
import { PersonalInfo as PersonalInfoType } from "@/models/ResumeInfo";
import { ActionTypes } from "./reducer/actions";

function Index() {
  const { user, isError, isLoading } = useUser();
  const [state, dispatch] = useReducer(reducer, user);

  console.log(state);
  if (!state) return;
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;

  function updateInfo(info: PersonalInfoType) {
    dispatch({ type: ActionTypes.SET_INFO, payload: { ...info } });
  }

  // have all data
  return (
    <div className="  pt-4">
      <div className="w-[80%] flex justify-between  mx-auto items-center">
        <p className=" font-bold text-xl">Profile</p>
        <Button
          onClick={() => {
            console.log(state);
          }}
        >
          Save
        </Button>
      </div>

      <main className="mx-auto w-[80%]">
        <PersonalInfo info={state.personal_info} updateInfo={updateInfo} />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Awards />
        <Projects />
        <Languages />
      </main>
    </div>
  );
}

export default Index;
