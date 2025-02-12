import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {Homepage,About,Support,VideoPage} from "./Pages"

Provider

const router=createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    // errorElement : '<Error />',
    children : [
      {
        path :'',
        element : <Homepage />
      }
    ]
  },
  {
    
      path :'/video/:id',
      element : <VideoPage />
    
  },
  {
    path :'/about',
    element:<About />
  },
  {
    path :'/support',
    element:<Support />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
