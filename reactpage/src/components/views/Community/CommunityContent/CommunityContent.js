import './CommunityContent.css';
import { CommunityData } from "../../../../Fixtures/Index";
import TitleFooter from "../../TitleFooter/TitleFooter";
import Footer from "../../TitleFooter/Footer/Footer";
import Like from '../../Like/Like.js' ;
import DataManage from "../../../DataManage/DataManage";
import Tips from '../../Tips/Tips';
const CommunityContent = () => {
  return (
    <div className="Community-Main-container">
      <div className="community-Content-container">
        <DataManage data={CommunityData} />
        <Tips/>
        <Like />
      </div>
      <TitleFooter />
      <Footer />
    </div>
  );}
export default CommunityContent;