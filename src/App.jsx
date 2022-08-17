import React from 'react'
import {Routes,Route} from "react-router-dom"
//Components
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Spacer from "@/components/layout/Spacer"
//Pages
import HomePage from "@/pages/HomePage"
import ProjectsPage from '@/pages/ProjectsPage'
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"

export default function App() {
  //add page routes here
  const routes=[
    {
      label:'Home',
      url:'/',
      page:<HomePage/>
    },
    {
      label:'Work',
      url:'/work',
      page:<ProjectsPage/>
    },
    {
      label:'About',
      url:'/about',
      page:<AboutPage/>
    },
    {
      label:'Contact',
      url:'/contact',
      page:<ContactPage/>
    },

  ]
  //Render Page
  function renderPage(route){
    return <Route key={route.url} path={route.url} element={route.page}/>
  }
  //Main App
  return (
    <div className="font-sans flex flex-col space-y-10 ">

      <NavBar routes={routes} />
      
      <Routes>
        {
          routes.map(route=>
            renderPage(route)
          )
        }
      </Routes>
      <Spacer/>
      <Footer/>
    </div>
  )
}

