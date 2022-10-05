import "./TutorialSider.css";
import { TutorialSiderData } from "../../../../Fixtures/Index";
import Accordion from "../../../../Accordion/Accordion";

const TutorialSider = () => {
  return (
    <div className="tutorial-sider-container">
      {TutorialSiderData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};
export default TutorialSider;
