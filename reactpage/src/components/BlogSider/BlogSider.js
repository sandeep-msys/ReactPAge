import "./BlogSider.css";
import { BlogSiderData } from "../../Fixtures/Index";
import Accordion from "../../Accordion/Accordion";
const BlogSider = () => {
  return (
    <div className="blog-sider-container">
      {BlogSiderData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export default BlogSider;
