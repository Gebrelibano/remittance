import  './contact.css'
import {BsArrowRight} from 'react-icons/bs'
import {VscCallIncoming} from 'react-icons/vsc'
import {CiMail} from 'react-icons/ci'
import {GoLocation} from 'react-icons/go'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='lef-contact'>
            <h2 className='call-h'>Request a call back</h2>
            <div className='request'>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Dolores tempora hic tenetur doloremque assumenda nihil neque recusandae amet.</span>
            <div className='dub'>
                <VscCallIncoming  className='ionn'/>
                <span>+251938924088</span><br />
                <CiMail  className='ionn'/>
                <span>rhhs@gmail.com</span><br />
                <GoLocation  className='ionn'/>
                <span>121 str.lorem,la,UAE
                    LOEREMLOREMLOREM
                    </span>
            </div>
            
            </div>
        </div>
        <div className='ri-contact'>
            <h2 className='us-h'>Contact </h2>
            
            <div className='contact-input'>
                <input type="text"   placeholder='Name' className='place'/> <br />
                <input type="email"  placeholder='Email' className='place'/><br />
                <input type="text" placeholder='massaege' className='place'/><br />
                <input type="password"  placeholder='Password' className='place'/><br />
            </div>
            <button className='mesege'>Send message <BsArrowRight  className='bsico'/></button>
        </div>
    </div>
  )
}

export default Contact