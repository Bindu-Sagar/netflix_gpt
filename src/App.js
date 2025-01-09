import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path: "/b rowse",
      element: <Browse/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
