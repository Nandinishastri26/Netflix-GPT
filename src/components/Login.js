import React, { useState,useRef } from 'react'
import Header from "./Header"
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const[isSignInForm,setIsignInForm]=useState(true);
  const[error,setError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    //validate the form data
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value)
    setError(message);
    if(message) return;

    //Sign In/Up logic
    if(!isSignInForm){
      //Sign Up logic

      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: USER_AVATAR,
      })
      .then(() => {
        // Profile updated!
        const {uid, email,displayName, photoURL}  = auth.currentUser;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName,
          photoURL:photoURL 
        }));

      })
      .catch((error) => {
        setError(error.message)
      });
      console.log(user);
    })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode + "-" + errorMessage)
    });
   }
    else{
      //Sign In logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); 
      
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode + "-" + errorMessage)
      });
 }
  }

  const toggleForm=()=>{
    setIsignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='fixed'>
     <img className='h-screen object-cover md:w-screen' src= {BG_IMG} alt="bg_img"
     />
  </div>
  <form 
  onSubmit={(e)=> e.preventDefault()}
  className='w-full  md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
    <h1 className='font-bold text-3xl py-4'>
      {isSignInForm ? "Sign In":"Sign Up"}
      </h1>

      {!isSignInForm && (
      <input
      ref={name}
      type="text"
       placeholder='Full Name' 
       className='p-4 my-4 w-full bg-gray-700' 
       autoComplete="none" 
       />
      )}
     
    <input 
    ref={email}
    type="text"
     placeholder='Email' 
     className='p-4 my-4 w-full bg-gray-700' 
     autoComplete="none" 
     />
    <input
    ref={password}
     type="password" 
    placeholder='Password' 
    className='p-4 my-4 w-full bg-gray-700'
     autoComplete="none" 
     />
     <p className='text-red-500 font-bold text-lg py-2'>{error}</p>
    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
    onClick={handleButtonClick}
    >
    {isSignInForm ? "Sign In":"Sign Up"}
    </button>
    <p className='py-4 cursor-pointer' onClick={toggleForm}>
      {isSignInForm ? 
      "New to Netflix ? Sign Up Now" 
      : "Already registered ? Sign In Now."
      } 
      </p>
  </form>
    </div>
  )
}

export default Login
