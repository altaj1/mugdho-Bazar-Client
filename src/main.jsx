/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routers.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}>
     </RouterProvider>
  </React.StrictMode>,
)
