import { CommunitySiderData } from "../../Fixtures/Index";
import "./CommunitySider.css";
import Accordion from "../../Accordion/Accordion";

const DocsSider = () => {
  return (
    <div className="community-sider-container">
      {CommunitySiderData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};
export default DocsSider;
