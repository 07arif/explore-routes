import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Main from './layout/Main';
import Friends from './component/Friends';
import ErrorPage from './component/ErrorPage';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts';
import PostDetails from './PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/product', element: <Product></Product> },
        {
          path: '/friends',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        {
          path:'/friend/:friendId',
          loader: async ({params}) => {
            // console.log(params.friends)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path:'/post',
          loader: async()=> {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
            
          },
          element:<Posts></Posts>
        },
      {
        path:'/post/:postId',
        loader: async({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element:<PostDetails></PostDetails>
      }
        

      ]
    },

    { path: '/about', element: <About></About> },
    { path: '/*', element: <ErrorPage></ErrorPage> }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
