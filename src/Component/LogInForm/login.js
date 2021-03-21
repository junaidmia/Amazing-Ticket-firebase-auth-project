import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import logIMG from './loginImg.png'
import './Login.css'
import fbLogo from './Facebook-logo.png'
import GoogleLogo from './Google-Logo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }



                    // Email Password sign in start
                    
const [newUser,setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })

    const handleBlur = (e) => {
        let isFieldValid = true;
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid
                && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;

            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        // console.log(user.email, user.password)
        if (newUser && user.name && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    // setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from)

                })
                .catch((error) => {
                    var errorCode = error.code;
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                    history.replace(from)

                });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    // Signed in
    const newUserInfo = { ...user };
    newUserInfo.error = "";
    newUserInfo.success = true;
    // setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    // history.replace(from)
    // ...
  })
  .catch((error) => {
    const newUserInfo = { ...user };
    newUserInfo.error = error.message
    newUserInfo.success = false;
    setLoggedInUser(newUserInfo);
    // history.replace(from)
  });

  }
        e.preventDefault();
    }

 //  email password login end 



                                            // google login start


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;


                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                console.log(errorCode, errorMessage, email, credential)
                // ...
            });
    }
    // google Sign in end





    // facebook log in start

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
                // ...
            });
    }
               // Facebook login End




    return (
        <section className="bg-light  border rounded">
            <Header></Header>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={logIMG} class="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7 px-5 pt-3">
                        <div className="row">
                            <div className="col-md-6 mt-5">
                                <h4>Sign in to your account</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="col-lg-10">
                                           { newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" class="form-control my-3 p-2" />}
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-10">
                                            <input type="email" name="email" onBlur={handleBlur} placeholder="Your Email" class="form-control my-3 p-2" />
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-10">
                                            <input type="Password" name="password" onBlur={handleBlur} placeholder="Password" class="form-control my-3 p-2" />
                                        </div>

                                    </div>

                                    <div className="form-row">
                                        <div className="col-lg-10">

                                            <button onClick={handleSubmit} type="button" class="btn1 mt-3 mb-"> {newUser ?'Sign up': 'Login'}  </button>

                                            <p style={{ color: 'red' }}>{user.error}</p>
                                            {user.success && <p style={{ color: 'green' }}>user {newUser ?'created' : 'logged in'} successfully</p>}
                                        </div>
                                       
                                        <span> {newUser ?'Already have an account? ': "Don't have account?"} 
                                       {/* <button class="text-danger btn-link border-0 bg-light" name="newUser" onClick={()=>setNewUser(!newUser)}> Sign Up</button> */}

                                       <span class="text-danger btn-link border-0 bg-light ms-3" name="newUser" onClick={()=>setNewUser(!newUser)}>{newUser ?'Login': 'Sign up'}</span>
                                       </span>
                                                                             
                                    </div>

                                </form>

                            </div>

                            <div className="col-md-6 mt-3">
                                <form>


                                    <h4 className="text-center mt-5" > Continue with </h4>

                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            <button type="button" onClick={handleGoogleSignIn} class="googleBtn  mb-3"> <img src={GoogleLogo} style={{ width: '30px' }} alt="" />  Google {loggedInUser.name}</button>
                                        </div>
                                        <h5 className="text-center" > or </h5>

                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-12">
                                            <button type="button" onClick={handleFacebookSignIn} class="fbBtn  mb-3" >  <img src={fbLogo} style={{ width: '40px' }} alt="" />  Facebook</button>
                                        </div>

                                    </div>


                                </form>

                            </div>
                        </div>





                    </div>
                </div>
            </div>
            <section>
            <div className="mb-5 text-center">
             <p>Copyright 2021- by Junaid <span>&#128512;</span> All Rights Reserved.</p>
            </div>
            </section>
        </section>
    );
};

export default Login;