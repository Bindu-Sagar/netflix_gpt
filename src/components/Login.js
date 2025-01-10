import { useState, useRef } from "react";
import Header from "./Header";
import { validateForm,ValidateSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm,setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate  = useNavigate();
  const dispatch = useDispatch()
  const toggleSignIn = () => {
    setIsSignInFrom(!isSignInForm);
  }
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const mobile = useRef();
  const handleSignIn = () => {
    isSignInForm 
      ? setErrorMessage(validateForm(email.current.value,password.current.value))
      : setErrorMessage(ValidateSignUp(email.current.value,password.current.value,fullName.current.value,mobile.current.value))
    if(errorMessage) return;
    if(!isSignInForm){
      // Sign Up code
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" "+errorMessage);
          // ..
        }
    ); 
    }
    else {
      // Sign In Code
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const {email,uid,displayName} = user;
          dispatch(setUser({email,uid,displayName}));
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  } 
  return (
    <div>
      <Header/>
      <div className=" bg-black absolute">
          <img className="opacity-80" src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_large.jpg" alt="Background Image"/>
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="p-10 absolute w-1/4 bg-black bg-opacity-80 wrap my-40 mx-auto right-0 left-0 items-center rounded-l">
        <h2 className="text-white font-bold text-3xl pb-10">{isSignInForm ? "Sign In": "Sign Up"}</h2>
        <input 
          type="text" placeholder="Email Address" ref={email}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
        {!isSignInForm && <>
            <input 
              type="text" placeholder="Full Name" ref={fullName}
              className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
            <input 
            type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required ref={mobile}
            className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/> 
          </>
        }
        <input 
          type="password" placeholder="Password" ref={password}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2"/>
        <button 
          className="px-8 py-2 w-full bg-red-600 rounded-md text-white hover:bg-red-700"
          onClick={handleSignIn}
          >{isSignInForm?"Sign in": "Sign Up"}</button>
          <p className="m-3 text-sm text-red-500">{errorMessage}</p>
        <p className="text-white my-5 cursor-pointer hover:underline" onClick={toggleSignIn}>
          {isSignInForm?"New to netflix? Sign Up now":"Already User? Login in"}</p>
      </form>
    </div>
  )
}

export default Login;