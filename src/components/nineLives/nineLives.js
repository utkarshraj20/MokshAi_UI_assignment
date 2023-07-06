import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './nineLives.css'
import DonateNow from './innerComponents/donateNow';
import div2Image from './Kitten-Season-Website-Banner.png'
import OurServices from './innerComponents/ourServices/ourServices';

const NineLives = () => {
    return (
        <div>
            <div className="div1">
                <h1>Finding homes for <br /> cats and kittens</h1>
            </div>
            <div className="div2" >
                <Link to="/donateNow" >
                    <img src={div2Image} alt='Kitten' />
                </Link>
                <Routes>
                    <Route path="/donateNow" Component={DonateNow} />
                </Routes>
            </div>
            <div className='div3' >
                <h1> Our Services </h1>
                <OurServices/>
            </div>
        </div>
    );
}

export default NineLives;