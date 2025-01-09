import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInFrom] = useState(true);

  const toggleSignIn = () => {
    setIsSignInFrom(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className=" bg-black absolute">
          <img className="opacity-80" src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_large.jpg" alt="Background Image"/>
      </div>
      <form className="p-10 absolute w-1/4 bg-black bg-opacity-80 wrap my-40 mx-auto right-0 left-0 items-center rounded-l">
        <h2 className="text-white font-bold text-3xl pb-10">{isSignInForm ? "Sign In": "Sign Up"}</h2>
        <input type="text" placeholder="Email Address" className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
        {!isSignInForm && <>
            <input type="text" placeholder="Full Name" className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/>
            <input type="text" placeholder="Phone Number" className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2 "/> 
          </>
        }
        <input type="password" placeholder="Password" className="p-2 mb-10 rounded-md w-full bg-black text-white bg-opacity-50 border-gray-300 border-2"/>
        <button className="px-8 py-2 w-full bg-red-600 rounded-md text-white hover:bg-red-700">{isSignInForm?"Sign in": "Sign Up"}</button>
        {}
        <p className="text-white my-5 cursor-pointer hover:underline" onClick={toggleSignIn}>
          {isSignInForm?"New to netflix? Sign Up now":"Already User? Login in"}</p>
      </form>
    </div>
  )
}

export default Login;