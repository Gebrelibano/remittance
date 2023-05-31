import  './track.css'
import dolar from "../../Image/dolar.png"
import Yequal from "../../Image/Yequal.png"
const Track = () => {
  return (
    <div className='track'>
       <div className='heed'>
       <h1 className='h-track'>Track your money Transfer</h1>
        <div className='t-wrapper'>
      <div className='tra-left'>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Unde blanditiis laborum, quos tempora nemo, <br />labore sunt odit quam numquam necessitatibus ratione. <br />Ipsam ipsa commodi impedit in aut ducimus quis officiis.<br />
        A impedit consectetur et,<br /> mollitia incidunt ipsum, tempora cupiditate quaerat,<br /> unde nulla ab accusantium officia? Placeat pariatur, <br />tempora quasi voluptates dolorem odio similique, <br />eaque distinctio eum aut repudiandae facere aperiam.</span>
        <div className='equal'>
            <img src={Yequal} alt="" srcset="" />
        </div>
      </div>
      <div className='tra-right'>
        <div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Porro consectetur earum iure alias ab <br />dolore ipsa cumque temporibus<br /> eligendi libero praesentium unde, debitis, <br />qui incidunt quasi beatae.<br /> Asperiores, veniam earum?<br />
        Recusandae voluptas veritatis impedit inventore, <br />vel reprehenderit nostrum totam consequatur <br />iste libero possimus, quis optio commodi architecto sit.<br /> Quos et aperiam odio,<br /> nisi fugit dolore ab tempora inventore itaque vero!</span>
        <div>
        <button className='truck'>Truck your money</button>
        </div>
       
        </div>
           <div className='dolar'>
            <img src={dolar} alt="" srcset="" />
           </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Track
