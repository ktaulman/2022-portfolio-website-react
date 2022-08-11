import React from 'react';
//Home 
import HomeBanner from "@/components/Home/HomeBanner"
import HomeCards from "@/components/Home/HomeCards"
import HomeAbout from '@/components/Home/HomeAbout'
import HomeProjects from "@/components/Home/HomeProjects"
import HomeTechnologies from "@/components/Home/HomeTechnologies"
import HomeContact from "@/components/Home/HomeContact"
import Section from "@/components/General/Section"

export default function Home (){
    //local state 
    return(
        <main className="pt-2 flex flex-col space-y-20 items-center">
            {/* Banner */}
            <HomeBanner/>

            <Section className='w-2/3 flex flex-col space-y-10'>
            {/* Card Panel Section */}
            <HomeCards/> 
                {/* About Me Section  */}    
                <HomeAbout/>

                {/* Projects Section */}
                <HomeProjects/>

                {/* Technologies Icons */}
                <HomeTechnologies/>

                {/* Contact Icons */}
                <HomeContact/>
            </Section>
        </main>
    )
}