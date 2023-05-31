import  './receiver.css'
import use from '../../Image/use.png'

const Receiver = () => {
  return (
    <div className='receiver'>
      <div className='wrapper-receive'>
        <div className='left-rec'>
            <img src={use} alt="" className='use-im' />
        </div>
        <div  className='right-rec'>
            <h2>Enter your receiver's details</h2>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Aspernatur, est. Voluptate, tempore quas. Consequuntur, <br />voluptates non iure placeat odit hic <br />veritatis adipisci sit doloribus reiciendis incidunt recusandae, <br />provident id libero.</span>
        </div>
      </div>
    </div>
  )
}

export default Receiver
