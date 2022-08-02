import React from 'react'
import {Routes,Route} from "react-router-dom"
//Components
import NavBar from "./components/NavBar"
//Pages
import Home from "./pages/Home"
import Projects from './pages/Projects'
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  //add page routes here
  const routes=[
    {
      label:'Home',
      url:'/',
      page:<Home/>
    },
    {
      label:'Projects',
      url:'/projects',
      page:<Projects/>
    },
    {
      label:'About',
      url:'/about',
      page:<About/>
    },
    {
      label:'Contact',
      url:'/contact',
      page:<Contact/>
    },

  ]
  //Render Page
  function renderPage(route){
    return <Route key={route.url} path={route.url} element={route.page}/>
  }
  //Main App
  return (
    <div className="font-sans px-4">

      <NavBar routes={routes} />
      
      <Routes>
        {
          routes.map(route=>
            renderPage(route)
          )
        }
      </Routes>
    </div>
  )
}

