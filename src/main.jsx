import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Routes'
import FriendContextApi from './context/FriendContextApi'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContextApi>
      <RouterProvider router={router}></RouterProvider>
    </FriendContextApi>
  </StrictMode>,
)
