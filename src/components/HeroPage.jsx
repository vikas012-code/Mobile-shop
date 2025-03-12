import hero_img from "../assets/homepage.jpg"

function HeroPage() {
    return (
      <>
      <div className=" ">
        <img className="w-[100vw]  object-cover -mt-30" src={hero_img} alt="" />
        <div className=" absolute top-[35vh] ">
          <h3 className="text-4xl font-extrabold text-blue-600  ml-20">Best SmartPhone <br />Buying place</h3>
          <p className=" relative bottom-[58%] ml-20">best place to buy smart for camera,battery or <br /> overall flagship phone best place is mobileshop</p>
        </div>
      </div>
      </>
    )
  }
  
  export default HeroPage