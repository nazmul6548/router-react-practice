import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Message from './Message/Message.jsx';
import Users from './Users/Users.jsx';
import Userdetails from './Components/UserDetails/Userdetails.jsx';
import Posts from './Posts/Posts.jsx';
import Postdetails from './Components/PostDetails/Postdetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
path:"/about",
element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/message",
        element:<Message></Message>
      },
      {
        path:"/user",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetails></Userdetails>
      },
      {
        path:"/posts",
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/posts/:id",
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<Postdetails></Postdetails>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
