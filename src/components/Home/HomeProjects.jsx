import React from "react"
import Section from "@/components/General/Section"
import SmallBar from "@/components/SmallBar"

export default function HomeProject(){
    function renderProjects(){}
    return(
        <Section className="w-full h-48 6">
        <SmallBar className=" m-auto mr-0"/>
        <h2 className=' text-right text-2xl'>Projects</h2>
        {renderProjects()}
        {/* <button>See More</button> */}
    </Section>
    )
}