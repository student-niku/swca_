import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AppLayout} from "./AppLayout"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {ErrorPage} from "./pages/ErrorPage"
import {Contact} from "./pages/Contact"
import {Achievers} from "./pages/Achievers"
import {Certifications} from "./pages/Certifications"
import {Courses} from "./pages/Courses"
import {Franch} from "./pages/Franch"
import {Gallery} from "./pages/Gallery"
import {Job} from "./pages/Job"
import {Services} from "./pages/Services"
import {StudentLogin} from "./pages/StudentLogin"
import "./App.css"
import { InstutetGogin } from "./pages/InstutetGogin";
import { Enquiry } from "./pages/Enquiry";
import { CoureseDetail } from "./pages/CourseDetail";

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
        path: "/",
        element: <Home />
        },
        {
          path: "/about",
          element: <About />
          
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/achievers",
          element: <Achievers />
        },
        {
          path: "/certifications",
          element: <Certifications />
        },
        {
          path: "/courses",
          element: <Courses />
        },
        {
          path: "/franch",
          element: <Franch />
        },
        {
          path: "/gallely",
          element: <Gallery />
        },
        {
          path: "/job",
          element: <Job />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/enquiry",
          element: <Enquiry />
        },
        {
          path: "/coursedetail",
          element: <CoureseDetail/>
        },
      

    ]
  
    },{
      path: "/studentlogin",
      element: <StudentLogin />
    }
    ,{
      path: "/instutetlogin",
      element : <InstutetGogin/>
    }
    ])
    
    ;
  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
