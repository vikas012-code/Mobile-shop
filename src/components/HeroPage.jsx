import { Link } from "react-router-dom"
import hero_img from "../assets/homepage.jpg"

function HeroPage() {
    return (
      <>
      <div className=" ">
        <img className="w-[100vw]  object-cover -mt-30" src={hero_img} alt="" />
        <div className=" absolute top-[20vw] text-center ml-10">
          <h3 className="text-lg  sm:text-4xl font-extrabold text-blue-600 text-start">Best Place <br />For Buying Gadget</h3>
          <p className="text-xs sm:text-lg mb-4">best place to buy smartphones , Speaker ,<br />headphone , earphone and TV in budget</p>
          <Link to={"/body"} className="text-xs sm:text-sm bg-blue-500 rounded-2xl p-2 text-white mr-5">Shop Now</Link>
        </div>
      </div>
      </>
    )
  }
  
  export default HeroPage