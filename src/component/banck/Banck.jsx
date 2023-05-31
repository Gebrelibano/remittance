import './banck.css'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {AiOutlineArrowRight} from 'react-icons/ai'
import store from '../../Image/store.png'
import silver from '../../Image/silver.png'
import awash from '../../Image/awash.png'
import buna from '../../Image/buna.png'
import oromiya from '../../Image/oromiya.png'
import wegagen from '../../Image/wegagen.png'
import hibre from '../../Image/hibre.png'
import anbesa from '../../Image/anbesa.png'
const Banck = () => {
  return (
    <div className='Banck'>
       <div className='b-wrappe'>
        <div className='left'>
        <div className='le-content'>
            <h2 className='badep'>pay the way that suits you</h2>
            <pre className='left--lore'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Ratione, repellat! Quis voluptate eligendi recusandae.<br/> Odio, mollitia quod! <br/>Fuga possimus voluptatum iusto quia laudantium, <br/>consequatur ad fugiat cupiditate harum blanditiis non.
            </pre>
        </div>
        <BiLeftArrowAlt className='ico'/>
        </div>
        <div className='right'>
           <div className='rig-side'>
           <img src={store} alt="" srcset=""  className='img-ri'/>
            <h2 className='r-badp'>Bank Deposit</h2>
            <pre className='rig--lore'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Nisi, tempore consequuntur totam ratione odio dicta debitis eius maiores sint culpa commodi saepe animi, <br/>explicabo non consectetur inventore qui tenetur cumque!
            </pre>
          
            <button className='learn-btn'>Learn more</button>
           </div>
        </div>
        <AiOutlineArrowRight  className='ico'/>
       </div>
       <h1 className='our'> our pertner</h1>
       <div className='partner'>
     
        <div className='silv'>
          <img src={silver} alt="" srcset="" />
        </div>
        <div className='awash'>
          <img src={awash} alt="" srcset="" />
        </div>
        <div className='buna'>
          <img src={buna} alt="" srcset="" />
        </div>
        <div className='oromiya'>
          <img src={oromiya} alt="" srcset="" />
        </div >
        <div className='wegagn'>
          <img src={wegagen} alt="" srcset="" />
        </div>
        <div className='hebre'>
          <img src={hibre} alt="" srcset="" />
        </div>
        <div className='anbesa'>
          <img src={anbesa} alt="" srcset="" />
        </div>
       </div>
    </div>
  )
}

export default Banck
