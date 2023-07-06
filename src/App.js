import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import NineLives from './components/nineLives/nineLives';
import LowCostServices from './components/lowCostServices/lowCostServices';
import WaysToGive from './components/waysToGive/waysToGive';
import GetInvoloved from './components/getInvoloved/getInvoloved';
import AboutUs from './components/aboutUs/aboutUs';
import Adopt from './components/adopt/adopt';
import GiveNow from './components/giveNow/giveNow';
import NavbarSection from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Router>

        <NavbarSection/>

        <Routes>
          <Route exact path = "/" Component={NineLives} />
          <Route path='/LowCostServices' Component={LowCostServices} />
          <Route path='/WaysToGive' Component={WaysToGive} />
          <Route path='/GetInvolved' Component={GetInvoloved} />
          <Route path='/AboutUs' Component={AboutUs} />
          <Route path='/Adopt' Component={Adopt} />
          <Route path='/GiveNow' Component={GiveNow} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
