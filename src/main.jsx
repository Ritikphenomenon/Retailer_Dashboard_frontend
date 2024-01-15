import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppProvider } from './utils/Context'

import Login from './pages/auth/Login/Login'
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword'
import Signup from './pages/auth/Signup/Signup'
import Home from './pages/core/home/Home'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
