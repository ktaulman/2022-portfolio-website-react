import React from 'react';
import Card from "@/components/Card"
import SplitPane from '@/components/SplitPane';
import SmallBar from "@/components/SmallBar"
import homeBannerImage from "@/assets/banner-home.svg"
import githubLogo from "@/assets/logo-github.png"
import linkedinLogo from "@/assets/logo-linkedin.png"

export default function Home (){
    //local state 
    const cards=[];
    //rendering 
    function renderCards(){
        return(
            <Card
            />
        )
    }
    
    function renderProjects(){}

    function renderTechnologies(){}

    //Components to Export 
 
    function Section({className,children}){
        return <div className={className}>{children}</div>
    }
    function ContactForm(){
        return(
            <div>

            </div>
        )
    }
    return(
        <main className="pt-2">
            {/* Banner */}
            <SplitPane 
                    classes={
                        {
                            root:"w-full  border-1 border-black",
                            left:'w-1/3',
                            right:"w-2/3"
                        }
                    }
                    left={
                        <div className="h-full flex flex-col justify-center items-center text-3xl">
                            <p>Hello, my name is</p>
                            <h1 className="py-3 font-bold">Kevin Taulman</h1>
                            <p>
                                I build web applications.
                            </p>
                            <div className="placeholder-gray-300 mt-3 flex justify-evenly items-center">
                                {/* //Resume Tag */}
                                <a href='/' className=" text-cyan-800 text-lg font-bold px-2 py-1 rounded border-2 border-cyan-800 hover:bg-cyan-800 hover:text-white">View Resume</a>
                                <a ><img className="w-10" src={githubLogo}/></a>
                                <a ><img className="w-10" src={linkedinLogo}/></a>
                            </div>
                        </div>
                    }
                    right={
                        <div>
                            <img src={homeBannerImage} alt='home banner'/>
                        </div>
                    }
                />
            {/* Card Panel  */}
            <Section className="w-full h-36">
                <h2></h2>
                {renderCards()}
            </Section>
            <Section>
                <SmallBar/>
                <h2 className="text-2xl">About Me</h2>
            </Section>
            <Section className="w-full h-48 6">
                <SmallBar className=" m-auto mr-0"/>
                <h2 className=' text-right text-2xl'>Projects</h2>
                {renderProjects()}
                {/* <button>See More</button> */}
            </Section>
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