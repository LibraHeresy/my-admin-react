import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router'
import {  RouterProvider } from 'react-router-dom'

const root = document.getElementById('root')

createRoot(root).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
