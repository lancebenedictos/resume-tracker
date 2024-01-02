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
import { useReducer } from "react";
import reducer from "./reducer/profileReducer";
import useUser from "@/hooks/useUser";
import ProfileContext from "./context/profileContext";

function Index() {
  const { user, isError, isLoading } = useUser();
  console.log(user);

  const [state, dispatch] = useReducer(reducer, user);
  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading</p>;
  // have all data
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      <div className="  pt-4">
        <div className="w-[80%] flex justify-between  mx-auto items-center">
          <p className=" font-bold text-xl">Profile</p>
          <Button>Save</Button>
        </div>

        <main className="mx-auto w-[80%]">
          <PersonalInfo />
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
    </ProfileContext.Provider>
  );
}

export default Index;
