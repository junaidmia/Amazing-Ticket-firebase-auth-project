// import React, { useEffect, useState } from 'react';
import busDetail from '../../FakeData/data.json'
import { useParams } from 'react-router';
import Header from '../Header/Header';
import map from './Map.png'
import { UserContext } from '../../App';
import { useContext } from 'react';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const BusDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let { busId } = useParams();

    const details = busDetail.find(bus => bus.id == busId);
    console.log(details)
    const { title, img, price, capacity } = details || {
        "id":1,
   "title":"Ac Bus",
"price":740,
"img":"https://static.vecteezy.com/system/resources/thumbnails/000/494/877/small/big_tour_bus_02.jpg",
"capacity":30
    }

    const style = {
        width: '140px',
        border: '3px solid lightGray',
        borderRadius: '10px'
    }

    return (
        <div >
            <Header></Header>

            <div class="container-fluid container">
                <div class="row mt-3 justify-content-between container">
                    <div class="col-md-5 ms-3 ">
                        <div className="row rounded mb-2 hotel-card d-flex align-items-center p-2 " style={{ backgroundColor:'white'}} >
                            <div className="col-md-5">
                                <img src={loggedInUser.photoURL} class=""  style={style} alt="Img not found" />
                            </div>
                            <div className="col-md-7 ">
                                <span>User Name</span>
                                <h2>{loggedInUser.name}</h2>
                                <span>Email</span>
                                <h5>{loggedInUser.email}</h5>
                            </div>
                        </div>

                        <div className="row border rounded mb-2 hotel-card d-flex align-items-center p-2 bg-light">
                            <div className="col-md-5">
                                <img src={img} style={style} alt="" />
                            </div>
                            <div className="col-md-7">
                                <h2>{title}</h2>
                                <span>Price</span> 
                                <h4>৳{price}</h4> 
                                <span>Capacity</span>  
                                <h5><FontAwesomeIcon icon={faUser} /> {capacity}</h5>
                            </div>
                        </div>
                        <div className="row border rounded mb-2 hotel-card d-flex align-items-center p-2 bg-light">
                            <div className="col-md-5">
                                <img src={img} style={style} alt="" />
                            </div>
                            <div className="col-md-7">
                                <h2>{title}</h2>
                                <span>Price</span>
                                <h5>৳{price}</h5>  
                                <span>Capacity</span>  
                                <h5><FontAwesomeIcon icon={faUser} /> {capacity}</h5>
                            </div>
                        </div>                      
                    </div>
                    <div className="col-md-5">
                        <img src={map} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusDetails;