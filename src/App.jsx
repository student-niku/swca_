import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import {AppLayout} from "./AppLayout"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {ErrorPage} from "./pages/ErrorPage"
import {Contact} from "./pages/Contact"
import {Achievers} from "./pages/Achievers"
import {Certifications} from "./pages/Certifications"
import {Courses} from "./pages/Courses"
import Franchise from "./pages/Franchise"
import {Gallery} from "./pages/Gallery"
import {Job} from "./pages/Job"
import {Services} from "./pages/Services"
import React from "react";
import "./App.css"
import { Enquiry } from "./pages/Enquiry";
import { CoureseDetail } from "./pages/CourseDetail";
import  LoginPage  from "./pages/LoginPage";
import  InstituteDashboard  from "./pages/InstituteDashboard";
import  StudentDashboard  from "./pages/StudentDashboard";
import { Download } from "./pages/Download";
function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "achievers",
            element: <Achievers />
          },
          {
            path: "certifications",
            element: <Certifications />
          },
          {
            path: "courses",
            element: <Courses />
          },
          {
            path: "franchise",
            element: <Franchise />
          },
          {
            path: "gallery",
            element: <Gallery />
          },
          {
            path: "job",
            element: <Job />
          },
          {
            path: "services",
            element: <Services />
          },
          {
            path: "enquiry",
            element: <Enquiry />
          },
          {
            path: "coursedetail",
            element: <CoureseDetail/>
          },
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "download",
            element: <Download />
          },
         
        ]
        
      },

      {
        path: "/Auth",
        element: <LoginPage />
      },
      {
        path: "/institute",
        element: <InstituteDashboard />,
      },
      {
        path: "Student",
        element: <StudentDashboard />, // Assuming Student Dashboard is similar to Institute Dashboard
      }
    
    ],
   
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
