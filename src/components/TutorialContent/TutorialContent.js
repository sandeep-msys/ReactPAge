import Footer from '../Footer/Footer'
import Like from '../Like/Like'
import './TutorialContent.css';
import Tips from "../Tips/Tips";
import { TutorialData } from "../../Fixtures/Index";
import DataManage from "../DataManage/DataManage";
const TutorialContent = () => {
  return (
    <div className="Tutorial-Main-container">
      <div className="Tutorial-Content-container">
        <DataManage data={TutorialData} />
        <Tips />
        <Like />
      </div>
      <Footer />
    </div>
  );
};
export default TutorialContent;
