import './service.css'
import darow from '../../Image/darow.png'
import key from '../../Image/key.png'

const Service = () => {
  return (
    <div className='service'>
      <div className='left-ser'>
          <h2>The service that we provide</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Illo doloribus distinctio hic dolores dolorum accusantium mollitia, <br />consequuntur perferendis blanditiis facilis impedit esse optio dolore accusamus, <br />excepturi corrupti saepe error ipsa?</span>
      </div>
      <div className='right-ser'>
          <div className='fast'>
          <div>
                <img src={darow} alt="" className='harow' />
            </div>
            <div>
            <h2 className='tran'>Fast transection</h2>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Harum eos, aperiam, deleniti at dolorem <br />est enim omnis delectus facere sit molestiae ad in excepturi ipsam, consectetur corrupti id amet rem!</span>
            </div>
          </div>
          <div className='secure'>
            <div>
                <img src={key} alt="" className='key'/>
            </div>
            <div>
            <h2 className='sec'>secure transection</h2>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Harum eos, aperiam, deleniti at dolorem est enim omnis delectus facere sit molestiae ad in excepturi ipsam, consectetur corrupti id amet rem!</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Service
