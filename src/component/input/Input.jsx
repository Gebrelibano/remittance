import  './input.css'
import {BiSearch} from 'react-icons/bi'
const Input = () => {
  return (
    <div className='input'>
       <div className='le-input'>
          <span>
            we will be there for you every step of the way 24/7!
          </span>
       </div>
       <div className='ri-input'>
         <div>
            <input type="text"  placeholder='How, can we help you?' className='int'/>
         </div>
         <BiSearch  className='icobi'/>
       </div>
    </div>
  )
}

export default Input
