import React from 'react';
import './lowCostServices.css'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import { Button } from 'react-bootstrap'

const LowCostServices = () => {
    return (
        <div className='heading2' >
            <div className='heading2-div1' >
                <div className='heading2-div1-col1' >
                    <h1>Low-Cost <br /> veternitary <br /> services </h1>
                    <Button className='heading2-div1-col1-btn' variant="success" >Spay Neuter</Button>
                    <Button variant="success" > Vaccinations & More </Button>
                </div>
                <div className='heading2-div1-col2' >
                    <img className='heading2-img' src={img5} />
                </div>
            </div>

            <div className='heading2-div2' >
                <div className='heading2-div2-col1' >
                    <img className='heading2-img' src={img6} />
                </div>
                <div className='heading2-div2-col2' >
                    <h1>Low-Cost Cat <br /> Spay/Neuter <br /> Clinics </h1>
                    <p>Accessible, affordable spay/neuter is critical to the welfare <br /> and stability of a community’s animal population. We proudly <br /> offer low-cost spay/neuter surgeries by appointment in the <br /> following categories:</p>
                    <div>
                        <div className='heading2-div1-col1-nav'>
                            <h1> Community Cats (Trap-Neuter-Return) </h1>
                            <p>Learn More</p>
                        </div>
                        <div className='heading2-div1-col1-nav'>
                            <h1> Privately Owned Cats </h1>
                            <p>Learn More</p>
                        </div>
                        <div className='heading2-div1-col1-nav'>
                            <h1> Nonprofit Rescue Support </h1>
                            <p>Learn More</p>
                        </div>
                        <div className='heading2-div1-col1-nav'>
                            <h1> Book Now (Privately Owned Cats) </h1>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LowCostServices;
