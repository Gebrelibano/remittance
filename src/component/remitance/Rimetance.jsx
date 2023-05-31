import './remitance.css'
import aple from '../../Image/aple.png'
import clok from '../../Image/clok.png'
import map from '../../Image/map.png'
import bottom from '../../Image/bottom.png'
import greet from '../../Image/greet.png'
import leg from '../../Image/leg.png'
const Rimetance = () => {
  return (
    <div className='Rimetance'>
        <div className='why'>
          <h2 className='w'>Why choose lorem remittance?</h2>
          <div className='circle'>
               <div className='two-circle'>
               <img src={aple} alt="" className='apppl' />
               <div className='clok'>
                <img src={clok} alt="" srcset="" />
               </div>
              </div>
               <div className='easy'>
                  <h2 className='wi'>It's easy with us</h2>
                  <span>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.<br /> Sunt temporibus molestiae </span>
               </div>
           </div>
        </div>
        <div className='sp-wrapper'>
            <div className='left-sp'>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Nisi possimus nam ratione praesentium nostrum velit, tenetur consequuntur. <br />Ipsa atque, repellendus fugit quam nesciunt ad quis voluptate <br />quas fuga perferendis praesentium!</span>
            </div>
            <div className='right-imsp'>
                <div className='wowd'>
                    <img src={map} alt="" className='mapp'/>
                    <div className='addminst'>
                        <img src={bottom} alt="" srcset="" />
                    </div>
                   

                </div>
                <div className='all'>
                <h2 className='saf'>Always safe</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br /> Tempore consequuntur magni aliquid temporibus exercitationem, <br />maiores iusto quasi aspernatur et</span>
                </div>
               
            </div>
        </div>
        <div className='botttom'>
            <div className='lgree'>
                <img src={greet} alt="" className='gret' />
                <div className='leg'>
                    <img src={leg} alt=""  />
                </div>
            </div>
            <div className='trust'>
            <h2 className='million'>Trusyed by million</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nulla modi debitis consectetur quasi obcaecati <br />quia repellat officiis rerum odio sit possimus,<br /> vel numquam perspiciatis nemo corrupti non. <br />Officiis, dicta facere?</span>
            </div>
    
        </div>
    </div>
  )
}

export default Rimetance