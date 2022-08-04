import React from 'react';
import HomeBanner from "@/components/Home/HomeBanner"
import HomeCards from "@/components/Home/HomeCards"
import SmallBar from "@/components/SmallBar"
import Section from "@/components/General/Section"

export default function Home (){
    //local state 
   

    
    function renderProjects(){}

    function renderTechnologies(){}

    //Components to Export 
 

    function ContactForm(){
        return(
            <div>

            </div>
        )
    }
    return(
        <main className="pt-2">
            {/* Banner */}
            <HomeBanner/>
            {/* Card Panel Section */}
            <HomeCards/> 
            
            {/* About Me Section  */}
            <Section>
                <SmallBar/>
                <h2 className="text-2xl">About Me</h2>
            </Section>

            {/* Projects Section */}
            <Section className="w-full h-48 6">
                <SmallBar className=" m-auto mr-0"/>
                <h2 className=' text-right text-2xl'>Projects</h2>
                {renderProjects()}
                {/* <button>See More</button> */}
            </Section>

            {/* Technologies Icons */}
            <Section>
                <SmallBar/>
                <h2 className="text-2xl">Technologies</h2>
                {renderTechnologies()}
            </Section>
            <Section>
                 <ContactForm/>
            </Section>
        </main>
    )
}