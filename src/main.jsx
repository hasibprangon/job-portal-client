import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import AuthContextProvider from './Provider/AuthContextProvider/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContextProvider> <RouterProvider router={router}></RouterProvider></AuthContextProvider>
  </StrictMode>,
)
