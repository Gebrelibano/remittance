import "./home.css";
import {MdPhoneCallback} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import {MdLanguage} from 'react-icons/md'
import {BsCaretDownSquareFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
// import Page from "../page/Page";
const Home = () => {
  return (
    <div className="Home">
      <div className="H-wrapper">
          <div className="left">
            <MdPhoneCallback className="icon" />
            <span >+251999965344</span>
          </div>
          <div className="center">
            <AiOutlineMail className="icon" />
            <span>Contact/ Get Help</span>
          </div>
          <div className="right">
            <BsFillPersonPlusFill className="icon" />
            <span>Register |</span>
            <FiLogIn  className="icon"/>
            <span>Log in |</span>
            <MdLanguage className="icon" />
            <span>En</span>
            <BsCaretDownSquareFill className="icons" />
          </div>
      </div>
        <div className="h-d">
          <div className="d-left"></div>
          <div className="d-right">
            <div className="h-d-list">Home</div>
            <div className="h-d-list">Featureres</div>
            <div className="h-d-list">Transfer</div>
            <div className="h-d-list">Contact</div>
            <BiSearchAlt2 className="icons" />
          </div>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Atque eligendi veritatis voluptatibus pariatur ullam. <br />Itaque provident nesciunt possimus <br />ipsa expedita inventore iste minus ratione asperiores doloremque,<br /> ullam accusantium dignissimos delectus?
       neque!</p>
       <div>
        <button className="btn">Send money</button>
       </div>
        </div>
    </div>
     
  );
};

export default Home;