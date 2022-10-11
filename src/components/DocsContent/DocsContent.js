import "./DocsContent.css";
import { DocsData } from "../../Fixtures/Index";
import TitleFooter from "../TitleFooter/TitleFooter";
import Footer from '../Footer/Footer'

import Tips from "../Tips/Tips";
import Like from "../Like/Like";
import DataManage from "../DataManage/DataManage";
// import { Link } from 'react-router-dom'
const DocsContent = () => {
  return (
    <div className="Docs-Main-container">
      <div className="docs-Content-container">
        {/* <Link to="/Blog">Blog</Link>
        <Link to="/Tuorial">Tutorial</Link> */}
        <DataManage data={DocsData} />
        <Tips />
        <Like />
      </div>
      <TitleFooter />
      <Footer />
    </div>
  );
};
export default DocsContent;















//  {DocsData.map((item) =>
//                     {
//                         return <div>
//                             {item.h1 ? <h1>{item.h1}</h1> : <h2>{item.h2}</h2>}

//                             {item.p ? <p>{item.p}</p> : null}
//                             {(item.list1 || item.list2) ? <ul>
//                                 <li><p>{item.list1}</p></li>
//                                 <li><p>{item.list2}</p></li>
//                             </ul> : null}
//                             {item.p1 ? <p>{item.p1}</p> : null}
//                         </div>;
//                     }
//                 )}
