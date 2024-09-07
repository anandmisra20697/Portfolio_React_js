
import Pdf from '../Pdf/Resume.Pdf'
import hero from './data/hero.json'
import Typed from "typed.js"
import { useEffect, useRef } from "react";

const Home = () => {
  const typeRef = useRef(null)
  useEffect(()=>{
    const option ={
      strings:["Welcome to My Profile","My Name Is Anand Mishra","I am FullStack Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typeRef.current , option)

    return() => {
      typed.destroy()
    }
  },[])

  return (
  <>
    <div className="container Home" id="home">
      <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1 ref={typeRef}> </h1>

        <a href={Pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Downlod Resume</a>
      </div>
      <div className="right">
        <div className="img"
          data-aos="fade-up-left"
        data-aos-duration="1000"
        >
          <img src={`assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
