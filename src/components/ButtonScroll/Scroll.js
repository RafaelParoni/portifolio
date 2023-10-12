import './Scroll.css'
import {FaArrowUp} from 'react-icons/fa6'


function ScrollBtn(){

    return (
      <button onClick={function(){window.scrollTo({ top: 0, behavior: 'smooth'})}} id='BtnScroll' className='BtnScroll'><FaArrowUp/></button>
    )
}

export default ScrollBtn;