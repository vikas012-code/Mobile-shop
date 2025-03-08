import smartphone from "../assets/smartphone.png";


function Footer(){
    return (
        <>
        <footer className="mt-2 ">
            <div className="flex justify-between p-3">
            <div>
                <a className="ml-2 flex items-center gap-2" href="#"> 
                    <img className="w-10 h-10" src={smartphone} alt="mobileshop"/> 
                    <h3 className="text-xl font-extrabold text-blue-600">mobileshop</h3>
                </a>
            </div>

            <div>
                <h2 >About us</h2>
                <ul>
                    <li>About shopcart</li>
                    <li>Careers</li>
                    <li>News &amp; Blog</li>
                    <li>Help</li>
                    <li>Press Center</li>
                    <li>Shop by location</li>
                    <li>Shopcart brands</li>
                    <li>Affiliate &amp; Partners</li>
                    <li>Ideas &amp; Guides</li>
                </ul>
            </div>
            

            <div>
                <h2>Services</h2>
                <ul>
                    <li>Gift Card</li>
                    <li>Mobile App</li>
                    <li>Shipping &amp; Delivery</li>
                    <li>Order Pickup</li>
                    <li>Account Signup</li>
                </ul>
            </div>

            <div>
                <h2>Help</h2>
                <ul>
                    <li>Shopcart Help</li>
                    <li>Returns</li>
                    <li>track orders</li>
                    <li>contact us</li>
                    <li>feedback</li>
                    <li>Security &amp; Fraud</li>
                </ul>
            </div>
            </div>
            <hr />
            <div className="flex h-20 justify-evenly">
                <div className="flex p-4 gap-4">
                    <div className="flex items-center">
                        <img className="w-6 mr-3" src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg" loading="lazy" alt=""/>
                        <p>Become <br /> Seller</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-6 mr-3" src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg" loading="lazy" alt=""/>
                        <p>Gift <br /> Cards</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-6 mr-3" src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg" loading="lazy" alt=""/>
                        <p>
                            Help <br /> Canter
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy &amp; Policy</a>
                    </div>
                    <div>All Right reserved by Musemind 
                        <a href="https://musemind.agency/" rel="dofollow" >ui/ux design</a>
                        agency | 2022
                    </div>
                </div>
            </div>
        </footer>
        </>
    )

}
export default Footer