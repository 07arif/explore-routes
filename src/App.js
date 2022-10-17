import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
{path:'/', element: <div>default page</div>},
{path:'/home', element: <div>Home</div>},
{path:'/about', element: <div>About</div>},
{path:'/know', element: <div>Know more</div>},

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
