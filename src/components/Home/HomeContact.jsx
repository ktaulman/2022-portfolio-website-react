import React from 'react';
import Section from "@/components/General/Section"
import SmallBar from "@/components/SmallBar"

export default function HomeContact(){
    function renderTechnologies(){}
    return(
        <Section>
        <SmallBar/>
        <h2 className="text-2xl">Technologies</h2>
        {renderTechnologies()}
    </Section>
    )
}