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
            <div key={route.url} className="flex justify-between items-center px-4 py-2 hover:underline hover:font-bold">
                <Link key={route.label}  to={route.url}>{route.label}</Link>
                {isActivePageLink}
            </div> 
        )
    }
    //main 
    return(
        <header className="bg-gradient-to-r from-green-400 via-blue-500" >
            <nav className=" text-white font-medium w-4/5 flex justify-between">
                {
                    routes.map(route=>renderLink(route,location))
                }  
            </nav>
        </header>
    )
}