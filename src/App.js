import Login from './components/Login';
import Browse from './components/Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';


function App() {
  
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <HomePage/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    { 
      path: "/browse",
      element: <Browse/>
    },
    {
      path:"/signup",
      element: <SignUp/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <HomePage/>
      </RouterProvider>
    </div>
  );
}

export default App;
