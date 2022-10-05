import './Like.css';
import {BiLike,BiDislike} from 'react-icons/bi'
const Like = () => {
    return ( 
    <div className='Like-container'>
        <p className='light-paragraph'>Is this page useful ?</p>
        <a href='/' className='like-icons'><BiLike/></a>
        <a href='/' className='like-icons'><BiDislike/></a>
        <a href='/' className='like-edit-anchor'>Edit this page</a>
    </div> 
)}
 
export default Like;