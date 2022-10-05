import './Footer.css';
// import {FaReact} from 'react-icons/fa';
import  {footerDoc,footerchanles,footercommunity,footermore} from '../../../../Fixtures/Index';
const Footer = () => {
    return (
        <div className='footer-bg-container'>
        <div className='footer-logo-containers'>
            {/* <a href="#">
                <img className='footer-img' src='' />
            </a> */}
            <p className='text'>Copyright © 2022 Meta Platforms, Inc.</p>
        </div>
        <div className='footer-middle-container'>
            <div >
                <h4>DOCS</h4>
                {footerDoc.map((item) =>
                    <a className='footer-doc-anchor' href={item.anchore}>{item.titel}</a>
                )}
            </div>
            <div >
                <h4>COMMUNITY</h4>
                {footercommunity.map((item) =>
                    <a className='footer-doc-anchor' href={item.anchore}>{item.titel}</a>

                )}
            </div>
        </div>
        <div className='footer-right-container'>
            <div >
                <h4>CHANNELS</h4>
                {footerchanles.map((item) =>
                    <a className='footer-doc-anchor' href={item.anchore}>{item.titel}</a>

                )}
            </div>
            <div className='more-container'>
                <h4>MORE</h4>
                {footermore.map((item) =>
                    <a className='footer-doc-anchor' href={item.anchore}>{item.titel}</a>
                )}
            </div>
        </div>
    </div>
        )}
export default Footer;
