import TutorialContent from "../../TutorialContent/TutorialContent";
import TutorialSider from "../../TutorialSider/TutorialSider";
import "./Tutorial.css";
const Tutorial = () => {
  return (
    <div className="Tutorial-container">
      <TutorialContent />
      <TutorialSider/>
    </div>
  );
};

export default Tutorial;
