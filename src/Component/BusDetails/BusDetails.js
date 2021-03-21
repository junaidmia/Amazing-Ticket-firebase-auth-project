import React, { useContext, useState } from 'react';
import Destination from '../Destination/Destination'
import Header from '../Header/Header';
import './BusDetails.css'
import { UserContext } from '../../App';
// import map from './Map.png'
import MapG from '../Map/MapG';

const BusDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [search, setSearch] = useState(false);
    const [destination1, setDestination1] = useState("")
    const [destination2, setDestination2] = useState("")


    const handleChange1 =(e)=>{
      setDestination1(e.target.value)

    }
    const handleChange2 =(e)=>{
      setDestination2(e.target.value)

    }

    const style = {
        width: '120px',
        border: '3px solid lightGray',
        borderRadius: '10px'
    }

    return (
        <div >

            {!search ?     
                <div >
                    <Header></Header>

                    <div className="row">
                        <div className="col-md-7 pt-3">
                            <div className="row container ms-1">

                                <div className="col-md-5 container">
                                    <div className="row rounded mb-2 hotel-card align-items-center p-2 " style={{ backgroundColor: 'white' }} >
                                        <div className="row ">
                                            <div className="col-md-6">
                                                <img src={loggedInUser.photoURL} class="" style={style} alt="Img not found" />

                                            </div>
                                            <div className="col-md-6 ms-">
                                                <span className=" ms-2 text-center"> User Name</span>
                                                <h6 className="ms-2">{loggedInUser.name}</h6>

                                            </div>

                                        </div>
                                        <div className="col-md-2 ">

                                            <span className="ms-2" >Email</span>
                                            <h5 className="ms-2" >{loggedInUser.email}</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 container bg-light ms- rounded">

                                    <h5 className="text-center p-3">Create your destination</h5>
                                    <form className="justify-content-center">
                                        <div className="form-row">
                                            <div className="col-lg-12">
                                                <label for="from">From</label>
                                                <input onChange={handleChange1} type="text" name="from" placeholder="From" class="form-control  my-3 p-2" />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col-lg-12">
                                                <label for="to" >To</label>
                                                <input onChange={handleChange2} type="text" name="to" placeholder="Your Destination" class="form-control my-3 p-2" />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col-lg-12">
                                                <label for="calender">Date</label>

                                                <input type="date" id="calender" name="calender" class="form-control my-3 p-2" />
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="col-lg-12">

                                                <button type="button" class="btn2 mt-3  mb-3" onClick={() => setSearch(true)} > Search </button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 mt-3">
                            {/* <img className="p-5" style={{ width: '100%' }} src={map} alt="" /> */}

                            <MapG></MapG>
                        </div>

                    </div>

                </div>

                :

                <Destination mainDestination1={destination1} mainDestination2={destination2}></Destination>
            }
        </div>
    );
};

export default BusDetails;