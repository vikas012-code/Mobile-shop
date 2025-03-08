import hero_img from "../assets/homepage.jpg"

function HeroPage() {
    return (
      <>
      <div className="h-[100vh] ">
        <img className="w-[100vw] h-[100vh] object-cover -mt-20" src={hero_img} alt="" />
        <h3 className="text-4xl font-extrabold relative bottom-[60%] text-blue-600  ml-20">Best SmartPhone <br />Buying place</h3>
        <p className=" relative bottom-[58%] ml-20">best place to buy smart for camera,battery or <br /> overall flagship phone best place is mobileshop</p>
      </div>
      </>
    )
  }
  
  export default HeroPage