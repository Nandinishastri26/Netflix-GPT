import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
     navigate("/error");
    });
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email,displayName,photoURL}  = user;
          dispatch(addUser({
            uid: uid, 
            email: email, 
            displayName: displayName,
            photoURL:photoURL 
          }));
          navigate("/browse");
         } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
     
      //UnSubscribe when component unmounts
      return () => unsubscribe();
      
  },[]);

  const handleGptSearchClick=()=>{
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
  return (
   <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
    <img className='w-44 mx-auto md:mx-0'
    src={LOGO}/>
   {user && (
    <div className='flex p-2 justify-between'>
      {
        showGptSearch && (
          <select 
          className='p-2 m-2 bg-gray-900 text-white rounded-md'
          onChange={handleLangChange}
          >
            {SUPPORTED_LANGUAGES.map((lang)=> (
              <option key={lang.identifier} value={lang.identifier}>
               {lang.name}
              </option>
            ))}
          </select>
        )
      }
     
      <button className='py-1 text-sm px-2 md:py-2 md:px-4 mx-4 my-2 bg-red-700 text-white rounded-lg cursor-pointer'
      onClick={handleGptSearchClick} 
       >
        {showGptSearch ? "Homepage" : "GPT Search"}
      </button>
    <img alt="userIcon" className='hidden md:block w-12 h-12 m-2'
    src={user?.photoURL}
    />
    <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
  </div>
   )}
   </div>
  )
}

export default Header
