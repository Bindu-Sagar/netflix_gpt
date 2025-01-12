import { useState, useRef } from "react";
import Header from "./Header";
import { validateForm,validateSignIn,ValidateSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate  = useNavigate();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const mobile = useRef();
  const [errorMessage,setErrorMessage] = useState(null);
  const handleSignUp = () =>{
    setErrorMessage(validateSignIn(email.current.value,password.current.value));
    if(!errorMessage){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          })
          navigate("/")
        }) 
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
  const redirectSignIn = () =>{
    navigate("/");
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
        <h2 className="text-white font-bold text-3xl pb-10">Sign In</h2>
        <input 
          type="text" placeholder="Email Address" ref={email}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
        <input 
          type="text" placeholder="Full Name" ref={name}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
        <input 
          type="text" placeholder="Mobile Number" ref={mobile}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
        
        <input 
          type="password" placeholder="Password" ref={password}
          className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2"/>
        <button onClick={handleSignUp}
          className="px-8 py-2 w-full bg-red-600 rounded-md text-white hover:bg-red-700"
          >Sign Up</button>
          <p className="m-3 text-sm text-red-500">{errorMessage}</p>
        <p className="text-white my-5 cursor-pointer hover:underline" onClick={redirectSignIn} >
          Already User? Sign In now</p>
      </form>
    </div>
  )
}

export default SignUp;