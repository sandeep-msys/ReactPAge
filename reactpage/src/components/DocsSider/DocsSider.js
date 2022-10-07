import { DocsSiderData } from "../../Fixtures/Index";
import "./DocsSider.css";
import Accordion from "../../Accordion/Accordion";

const DocsSider = () => {
  return (
    <div className="docs-sider-container">
      {DocsSiderData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};
export default DocsSider;
