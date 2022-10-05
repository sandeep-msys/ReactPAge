import CommunityContent from "./CommunityContent/CommunityContent";
import CommunitySider from "./CommunitySider/CommunitySider";
import "./Community.css";
const Community = () => {
  return (
    <div className="Community-container">
      <CommunityContent />
      <CommunitySider />
    </div>
  );
};
export default Community;
