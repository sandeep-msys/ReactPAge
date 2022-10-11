import './Blog.css';
import BlogContent from '../../BlogContent/BlogContent'
import BlogSider from '../../BlogSider/BlogSider'
const Blog = () => {
    return ( 
        <div className='Blog-container'>
            <BlogContent/>
            <BlogSider/>
        </div>
     );
}
 
export default Blog;
