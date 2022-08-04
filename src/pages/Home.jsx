import React from 'react';
//Home 
import HomeBanner from "@/components/Home/HomeBanner"
import HomeCards from "@/components/Home/HomeCards"
import HomeAbout from '@/components/Home/HomeAbout'
import HomeProjects from "@/components/Home/HomeProjects"
import HomeContact from "@/components/Home/HomeContact"

export default function Home (){
    //local state 
    return(
        <main className="pt-2">
            {/* Banner */}
            <HomeBanner/>

            {/* Card Panel Section */}
            <HomeCards/> 

             {/* About Me Section  */}    
            <HomeAbout/>

            {/* Projects Section */}
            <HomeProjects/>

            {/* Technologies Icons */}
            <HomeContact/>
        </main>
    )
}