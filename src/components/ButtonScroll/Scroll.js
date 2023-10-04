import './Scroll.css'
import {FaArrowUp} from 'react-icons/fa6'


function ScrollBtn(){

    return (
      <a href='#top'><button id='BtnScroll' className='BtnScroll'><FaArrowUp/></button></a> 
    )
}

export default ScrollBtn;