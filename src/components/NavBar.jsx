import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import { ArrowCircleLeftIcon } from '@heroicons/react/solid'

export default function NavBar({routes}){
    //access router history 
    const location=useLocation();
    
    //helper rendering function
    function renderLink (route,location){
        //conditionally render active page icon
        const isActivePageLink=location.pathname===route.url?<ArrowCircleLeftIcon className="ml-2 h-4 w-4 text-white"/>:<div></div>
        //return Link and if active return Page
        return(
            <div key={route.url} className="flex justify-between items-center py-4 m-0 text-xs sm:px-4 sm:ml-3 sm:py-2 hover:underline hover:font-bold lg:text-xl">
                <Link key={route.label}  to={route.url}>{route.label}</Link>
                {isActivePageLink}
            </div> 
        )
    }
    //main 
    return(
        <header className=" bg-blue-800 flex justify-center" >
            {/* Desktop Navigation Menu */}
            <nav className="w-4/5 text-white font-medium  flex justify-between lg:text-4xl">
                {/* Rendering Links */}
                    {
                        routes.map(route=>renderLink(route,location))
                    }  
            </nav>
            {/* Mobile Navigation Menu  */}
        </header>
    )
}