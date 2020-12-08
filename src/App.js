import React,{useEffect, useState} from "react";
import {Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import UserProfile from  './containers/UserProfile';
import Header from './components/Header';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    //apiKey: "AIzaSyB3K_F2lXSfMpBXgguZ-MtqFLEqQikJBRo",
    authDomain: "exercise-5-31fa5.firebaseapp.com",
    projectId: "exercise-5-31fa5",
    storageBucket: "exercise-5-31fa5.appspot.com",
    messagingSenderId: "966459190245",
    appId: "1:966459190245:web:c6eb2b6c3677d5a9269d0c"
  
};
function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [loading,setLoading] = useState(true);
  // const [userInformation, setUserInformation] = useState({});
  useEffect(()=>{
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      console.log("Initialized app");
    }
  },[firebaseConfig]);
  
  //Function for logging in 
  function LoginFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;
    
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(function (response){
      console.log("LOGIN RESPONSE",response);
      setLoggedIn(true);
    })
    .catch(function (error){
      console.log("LOGIN ERROR",error);
    })
  }

  function LogoutFunction() {

  }

  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(function (response){
        console.log("Account created",response);
        setLoggedIn(true);
      })
      .catch(function (error){
        console.log("Account failed to create",error);
      })
  }
  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunc={LogoutFunction}/>
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
