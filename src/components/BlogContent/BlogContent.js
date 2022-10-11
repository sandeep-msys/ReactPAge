import '../DocsContent/DocsContent.css'
import Footer from "../views/TitleFooter/Footer/Footer";
import { BlogData } from "../../Fixtures/Index";
import Tips from "../Tips/Tips";
import Like from "../Like/Like";
import DataManage from "../DataManage/DataManage";
import './BlogContent.css'
const BlogContent = () => {
  return (
    <div className="Blog-Main-container">
      <div className="blog-Content-container">
        <DataManage data={BlogData} />
        <Tips />
        <Like />
      </div>
      <Footer />
    </div>
  );
};

export default BlogContent;

// {dummydata.map((item)=>
//   <div >
//  {item.header1 ? <h1>{item.header1}</h1>:<h2>{item.header2}</h2>}
//  {item.description ? <p>{item.description}</p>:null}
//  {item.anchor.map((eachitem) =>
//  <>
//  <p dangerouslySetInnerHTML={{__html:item.description.replace(eachitem,`<a href="/">${eachitem}</a>`)}}/>
//  </>)}
//       {(item.list1  || item.list2) ?  <ul>
//           <li><p>{item.lis1}</p></li>
//           <li><p>{item.list2}</p></li>
//       </ul>:null}
//  {item.description1 ? <p>{item.description1}</p> : null}
//   </div>
//   )
//   }
//   <Tips/>
//  </div>
