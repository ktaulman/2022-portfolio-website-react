import React from 'react';
import Section from "@/components/General/Section"
import About from "@/components/Home/About"

export default function AboutPage(){
    return(
        <Section className="flex justify-center">
        <div className="w-3/5">
            <About/>
        </div>
         </Section>
    )
}