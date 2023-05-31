import  './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiGitlab} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {TbBrandTelegram}  from 'react-icons/tb'
import {BsInstagram} from 'react-icons/bs'
import {SiFigma} from 'react-icons/si'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='FO-site'>
            <div className='sln'>
            <h1 className='follow'> SiteLogo</h1>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ab, error veniam harum, unde enim placeat quod non.</span>
            </div>
           
        </div>
        <div className='cases'>
        <h1 className='follow'>Use Cases</h1>
            <div className='uwtc'>
            <h3>why you choose us ?</h3>
            <h3>truck your mony</h3>
            <h3>check rate</h3>
            </div>
            
        </div>
        <div className='campany'>
            <h1 className='follow'>Company</h1>
            <div className='atfrc'>
            <h4>About Us</h4>
            <h4>trasfer</h4>
            <h4>FAQs</h4>
            <h4>register</h4>
            <h4>Contact Us</h4>
            </div>
            
        </div>
        <div className='folow'> 
            <h1 className='follow -us'>Follow us</h1>
            <div className='ffbtb'>
             <FiFacebook  className='iconlo'/>
             <FiGitlab  className='iconlo'/>
             <BsGithub  className='iconlo'/>
             <TbBrandTelegram  className='iconlo'/>
             <BsInstagram  className='iconlo'/>
             <SiFigma className='iconlo'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
