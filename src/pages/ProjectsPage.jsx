import React from 'react';
import Projects from "@/components/Home/Projects"
import Section from "@/components/General/Section"

export default function ProjectsPage(){
    //MapSimply, AutumnDoors, The Pave Foundation, Portfolio

    return(
       <Section className="flex justify-center">
            <div className="w-3/5">
                <Projects/>
            </div>
        </Section>
    )
}