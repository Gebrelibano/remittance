import './page.css'
import Group from '../../Image/Group.png'
import Lorem from '../../Image/Lorem.png'
import Vector1 from '../../Image/Vector1.png'
import Vector2 from '../../Image/Vector2.png'
import Vector3 from '../../Image/Vector3.png'
import Vector4 from '../../Image/Vector4.png'
const Page = () => {
  return (
    <div className='page'>
       <div className='pa-wrapper'>
        <div className='p-left'>
          <img src={Group} alt="" className="group" />
         
        </div>
        <div className='p-center'>
          <img src="https://img.freepik.com/free-photo/business-woman-working-laptop_1388-91.jpg?w=500" alt="yuhgh" className="cen-img" />
          <div className='pc-bg'>
          <img src={Lorem} alt="" className='cen-Lorem' />
          </div>
         
        </div>
        <div className='p-right'>
          <h2>Register and verify your free profile</h2>
           <span>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quidem possimus natus necessitatibus ipsam! Dolorem quod explicabo in porro dicta.<br /> Dicta laborum commodi ullam atque accusamus,<br /> praesentium ipsam quibusdam quia voluptates.
           </span>
           <img src={Vector1} alt="" className='vp1' />
           <img src={Vector2} alt="" className='vp2' />
           <img src={Vector3} alt="" className='vp3' />
           <img src={Vector4} alt="" className='vp4' />
        </div>
       </div>
    </div>
  )
}

export default Page