import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'
import EditPost from './pages/EditPost.jsx'
import Signup from './pages/Signup'
import AddPost from './pages/AddPost.jsx'
import AllPost from './pages/AllPost.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    Children :[
      {
        path:"/",
        element :<Home />
      },
      {
        path: "/login",
        element:(
          <AuthLayout authentication={false}>
            <Login />
      
          </AuthLayout>
        ),

      },
      {
        path :"/Signup",
        element:(
          <AuthLayout authentication= {false}>
            <Login />
          </AuthLayout>
        ),    
       },
        {
          path :"/Allpost",
          element: (
            <AuthLayout authentication>
              {" "}
              <Allpost />
            </AuthLayout>
          ),
        },
        {
          path : "/add-post",
          element :(
            <AuthLayout authentication>
              {""}
              <AddPost />

            </AuthLayout>
          ),
        },
        {
        
        path :"/edit-post/:slug",
        element :(
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path : "/post/:slug",
        element : <Post />,
      },
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router ={router} />

    </Provider>
    
  </React.StrictMode>,
)
