import './world.css'

const World = () => {
  return (
    <div className='World'>
        <div className='wo-wrappeer'>
            <div className='wo-left'>
                <h1 className='inter'>International money transfer</h1>
                <span className='nation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iure impedit facilis praesentium ipsam repellendus magni fugiat? Ex modi, sapiente laboriosam excepturi facilis consequuntur iste obcaecati, repudiandae corporis, soluta rerum.
                    Nisi reiciendis reprehenderit voluptas saepe accusantium. Animi alias magnam labore, cumque eveniet ipsam. Alias, modi! Illum, laudantium sed, recusandae asperiores accusamus earum minima porro sunt voluptatum optio veritatis! Delectus, sapiente.
                </span>
                <div>
                <button className='btn-world'>send money</button>
                </div>
                
            </div>
            <div className='wo-right'>
                <img src="https://cdn.slidesharecdn.com/ss_thumbnails/pptongcchomeloans-180111103238-thumbnail-4.jpg?cb=1515666812" alt=""  className='save-money'/>
            </div>
        </div>
        <div className='three'>
            <div >
                <button className='open'>Open account</button>
            </div>
            <div >
                <button className='contact'>Contact us</button>
            </div>
            <div>
               <h1 className='trans'>Ready to make a transfer? Let's get started.</h1>
            </div>
        </div>
    </div>
  )
}

export default World