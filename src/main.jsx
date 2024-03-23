import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarkss from './pages/Bookmarkss.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import Blog from './Components/Blog.jsx'
import Author from './Components/Author.jsx'
import Content from './Components/Content.jsx'
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index: true,
            element: <Content></Content>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarkss></Bookmarkss>
      },

    ]
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
