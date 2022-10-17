import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Main from './layout/Main';
import Friends from './component/Friends';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/product', element: <Product></Product> },
        { path: '/friends', element: <Friends></Friends> }

      ]
    },

    { path: '/about', element: <About></About> },


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
