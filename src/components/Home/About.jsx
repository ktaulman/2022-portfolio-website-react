import React from 'react'
import SmallBar from "@/components/General/SmallBar"
import SplitPane from "@/components/General/SplitPane"
import Section from "@/components/General/Section"
import AboutImage from "@/assets/about-image.svg"

export default function About(){
        return(
            <Section className=''>
            
            <SplitPane
                left={
                    <div className="flex flex-col px-3 pr-4">
                        <SmallBar/>
                        <h2 className="text-4xl">About Me</h2>
                        <p className="my-10 text-lg">
                            Hi, my name's Kevin Taulman, a Web Developer/Software Engineer from Atlanta, GA. I love building web applications that help solve issues or enable a new idea!
                        </p>
                        <p className=" text-lg">
                            I work primarily with React, Vue, Express, Node, and SQL and volunteer as the the Technology Director for a Non-Profit. I've been fortunate enough to be able to learn about AWS, Google Cloud, and more but building out their technology infrastructure! 
                        </p>
                    </div>
                }
                right={
                    <img src={AboutImage} alt="kevin taulman image"/>
                }
                classes={{
                    left:'w-1/2 flex justify-end',
                    right:'w-1/2 flex justify-start',
                    
                }}
            />
        </Section>
        )
}