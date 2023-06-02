import './store.css'
import Frame124 from '../../Image/Frame 124.png'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLockAlt}  from 'react-icons/bi'
import {AiFillEye} from 'react-icons/ai'
const Store = () => {
  return (
    <div className='store'>
        <div className='stor-left'>
            <img src='https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80' alt="map hand" srcset="" />
        </div>
        <div className='stor-right'>
          <form action="">
            <h1>Welcome back.</h1>
            <div className='stor-logo'>
              <div className='E-inpt'>
              <AiOutlineMail className='Aicon'/>
               <div>
               <input type="text" placeholder='Email adress' />
              </div>
               
               </div>
                
                <div className='password'>
                 <BiLockAlt className='Aicon'/>
                <input type="password" placeholder='password' className='pasword'/>
                <AiFillEye className='Aicon'/>
                </div>
                <div className='chek'>
                  <div>
                  <input type="checkbox" />
                <label className='la-re'>Remember me</label>
                <a href="">Trouble logging in?</a>
                  </div>
               
                </div>
                <button className='logi'>Log in</button>
            </div>
           
          </form>
        </div>
    </div>
  )
}

export default Store