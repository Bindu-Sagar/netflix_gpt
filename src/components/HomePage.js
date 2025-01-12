import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { clearUser, setUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {email, uid ,displayName} = user;
        dispatch(setUser({email:email,uid:uid,displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(clearUser());
        signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/login");
        }).catch((error) => {
          // An error happened.
        });
      }
    });
    return () => unsubscribe;
  },[]);
  return (
    <div>HomePage</div>
  )
}

export default HomePage;