import React from 'react'
import AppRouter from './utils/AppRouter'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(AppRouter)
  return <>
  <div id="wrapper">
  <RouterProvider router={router}/>
  </div>
  </>
}

export default App