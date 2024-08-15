/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routers.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router}>
     </RouterProvider>
     </AuthProvider>
     </QueryClientProvider>
  </React.StrictMode>,
)
