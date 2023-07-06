import { BrowserRouter as Router, Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="link-left" to="" >NineLives</Link>
            <Link className="link dropdown" to="/LowCostServices" >
                <div className="dropdown">
                    <button className="dropbtn">Low Cost Services</button>
                    <div className="dropdown-content">
                        <Link className="link" to="/PremiumServices">Spay / Neutar</Link>
                        <Link className="link" to="/SpecialOffers"> Vaccines & More </Link>
                        <Link className="link" to="/CustomPackages"> Book Now </Link>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/WaysToGive" >Ways to Give </Link>
            <Link className="link" to="/GetInvolved" >Get Involved </Link>
            <Link className="link" to="/AboutUs" >About Us </Link>
            <Link className="link-right" to="/Adopt" >Adopt </Link>
            <Link className="link-right" to="/GiveNow" >Give Now</Link>
        </div>
    );
}

export default Navbar;