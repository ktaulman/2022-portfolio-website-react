import React from 'react';
//Home 
import Banner from "@/components/Home/Banner"
import Cards from "@/components/Home/Cards"
import About from '@/components/Home/About'
import Projects from "@/components/Home/Projects"
import Technologies from "@/components/Home/Technologies"
import Contact from "@/components/Home/Contact"
import Section from "@/components/General/Section"

export default function HomePage(){
    //local state 
    return(
        <main className="pt-2 flex flex-col space-y-20 items-center">
            {/* Banner */}
            <Banner/>

            <Section className='w-2/3 flex flex-col space-y-10'>
            {/* Card Panel Section */}
            <Cards/> 
                {/* About Me Section  */}    
                <About/>

                {/* Projects Section */}
                <Projects/>

                {/* Technologies Icons */}
                <Technologies/>

                {/* Contact Icons */}
                <Contact/>
            </Section>
        </main>
    )
}