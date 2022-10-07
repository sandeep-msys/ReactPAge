import './Tips.css'
const Tips = ({tiptitle,tipparagraph}) => {
    return ( 
    <div className='Tips-container'>
        <h3>{tiptitle}</h3>
        <p>{tipparagraph}
        </p>
    </div> );
}
 
export default Tips;