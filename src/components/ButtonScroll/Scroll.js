import './Scroll.css'
import { BsArrowUpShort } from "react-icons/bs";


function ScrollBtn(){


    document.addEventListener('scroll', (e) => {
      var Scroll = document.getElementById("html").scrollTop
      if(Scroll >= 900){
        document.getElementById("BtnScroll").style.display = 'flex'
      }else if(Scroll < 899){
        document.getElementById("BtnScroll").style.display = 'none'
      }
    })

    return (
      <button onClick={function(){window.scrollTo(0,0)}} id='BtnScroll' className='BtnScroll'><BsArrowUpShort/></button>
    )
}

export default ScrollBtn;