import { Provider, useDispatch } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { clearUser, setUser } from './utils/userSlice';
import { auth } from './utils/firebase';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
      if(user) {
        const {email,uid,displayName} = user;
        dispatch(setUser({email,uid,displayName}));
      }
      else{

        dispatch(clearUser());
      }
    })
  },[]);
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    { 
      path: "/browse",
      element: <Browse/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
