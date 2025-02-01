import './index.css'
import { StrictMode } from 'react'
import Root from './Components/Root/Root';
import { createRoot } from 'react-dom/client'
import ErrorPage from './Components/error-page/error-page';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/", element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs", element: <AppliedJobs></AppliedJobs>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
