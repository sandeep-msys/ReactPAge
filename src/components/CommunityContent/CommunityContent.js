import './CommunityContent.css';
import { CommunityData } from "../../Fixtures/Index";
import Footer from '../views/Footer/Footer'
import Like from '../Like/Like.js' ;
import DataManage from "../DataManage/DataManage";
import Tips from '../Tips/Tips';
const CommunityContent = () => {
  return (
    <div className="Community-Main-container">
      <div className="community-Content-container">
        <DataManage data={CommunityData} />
        <Tips/>
        <Like />
      </div>
      <Footer />
    </div>
  );}
export default CommunityContent;