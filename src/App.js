import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

function App() {
  const router = createBrowserRouter([
    
{path:'/', element: <div>default page</div>},
{path:'/home', element: <Home></Home>},
{path:'/about', element: <About></About>},
{path:'/know', element: <div>Know more</div>},

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
