import React, { useEffect, useState } from 'react';
import BusData from '../../FakeData/data.json'
import BusCategories from '../CardCategories/BusCategories';

import './Home.css'

const Home = () => {
    const [busCategories, setBusCategories] = useState([]);


    useEffect(() => {
        setBusCategories(BusData)
        console.log(BusData);
    }, [])
    return (
        <div className="bg-img container">

            <div className=" d-flex justify-content-center pb-5 pt-5">
                <h1 className="text-center bg-light rounded-pill p-2">Available Bus of Junaid Paribahan  </h1>
            </div>

            <div className="row">
                {
                    busCategories.map(busCategory => <BusCategories busCategory={busCategory}></BusCategories>)
                }
            </div>

          
        </div>
        
    );
};

export default Home;