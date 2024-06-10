import { useState } from "react";
import FormContact from "./component/FormContact";

function App() {
  const [activeForm, setActiveForm] = useState('FormFirstResume');

  return (
    <div className="App">
      <div className="flex-col justify-center py-10 align-middle px-14 md:px-32 md:py-16">
        <div className="flex-row flex-wrap self-start mb-2">
          <button className='btnTab' onClick={() => setActiveForm("FormFirstResume")}>FIRST RESUME</button>
          <button className='btnTab' onClick={() => setActiveForm("FormContact")} >CONTACT</button>
          <button className='btnTab' onClick={() => setActiveForm("Experience")}>EXPERIENCE</button>
          <button className='btnTab' onClick={() => setActiveForm("Project")}>PROJECT</button>
          <button className='btnTab' onClick={() => setActiveForm("Eductaion")}>EDUCATION</button>
          <button className='btnTab' onClick={() => setActiveForm("Certification")}>CERTIFICATIONS</button>
          <button className='btnTab' onClick={() => setActiveForm("CourseWork")}>COURSEWORK</button>
          <button className='btnTab' onClick={() => setActiveForm("Involvement")}>INVOLVEMENT</button>
          <button className='btnTab' onClick={() => setActiveForm("Skills")}>SKILLS</button>
          <button className='btnTab' onClick={() => setActiveForm("Summary")}>SUMMARY</button>
          <button className='btnTab' onClick={() => setActiveForm("FinishUpAndPreview")}>FINISH UP & PREVIEW</button>
          <button className='btnTab' onClick={() => setActiveForm("AiCoverLetter")}>AI COVER LETTER</button>
        </div>
        {activeForm === "FormFirstResume" && <div><h2>FormFirstResume</h2></div>}
        {activeForm === "FormContact" && <FormContact />}
        {activeForm === "Experience" && <div><h2>Experience</h2></div>}
        {activeForm === "Project" && <div><h2>Project</h2></div>}
        {activeForm === "Eductaion" && <div><h2>Eductaion</h2></div>}
        {activeForm === "Certification" && <div><h2>Certification</h2></div>}
        {activeForm === "CourseWork" && <div><h2>CourseWork</h2></div>}
        {activeForm === "Involvement" && <div><h2>Involvement</h2></div>}
        {activeForm === "Skills" && <div><h2>Skills</h2></div>}
        {activeForm === "Summary" && <div><h2>Summary</h2></div>}
        {activeForm === "FinishUpAndPreview" && <div><h2>FinishUpAndPreview</h2></div>}
        {activeForm === "AiCoverLetter" && <div><h2>AiCoverLetter</h2></div>}
      </div>
    </div>
  );
}

export default App;
