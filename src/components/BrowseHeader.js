import React from "react"
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const handledSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
    }).catch((error) => {
      // An error happened.
    });
  }
  const user = useSelector(store => store.user);
  if(user === null ){
    return null;
  }
  return (
    <div className='flex justify-between'>
      <img className='w-48 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix LOGO'/>
      <div className='flex items-center'>
        <div>
          <img className='w-10 rounded-md' src='https://occ-0-116-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7'/>
          <p className='text-red-500'>{user.displayName}</p>
        </div>
        <button className='text-white bg-red-500 rounded-md mx-3 p-2' onClick={handledSignOut}>Sign Out</button>
      </div>
  </div>
  )
}

export default BrowseHeader;
