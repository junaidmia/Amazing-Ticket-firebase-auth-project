import React, { useContext } from 'react';
import './Header.css';
import bus from './bus-clipart-logo-travel-bus-logo-11563056641hjni9vkxhc.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   
    return (
        <div>            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/home" class="navbar-brand nav-margin fw-bold ms-3"  > <a  href="..." style={{textDecoration:'none',color:'black'}}>Amazing Ticket <img src={bus} style={{width:'50px'}} alt=""/></a></Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
                            <li class="nav-item ">
                                <Link to="/home" style={{textDecoration:'none',color:'black'}}><a class="nav-link active ms-5 fw-bolder" aria-current="page" href="...">Home</a></Link>
                            </li>
                            <li class="nav-item ">
                                <Link to="/busDetails" style={{textDecoration:'none',color:'black'}} > <a class="nav-link ms-5 fw-bolder" href="..">Destination</a></Link>
                             
                               
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link ms-5 fw-bolder" href="..">Blog</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link ms-5 fw-bolder" href="..">Contact</a>
                            </li>
                            <Link to="/busDetails" style={{marginLeft:'35%'}}> <a href="..." class="btn btn-outline-success" >Login </a> </Link>
                                                                                                                          
                        </ul>
                        <p class=" fw-bolder px-5">{loggedInUser.name}</p>
                        <form class="">
                           
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;