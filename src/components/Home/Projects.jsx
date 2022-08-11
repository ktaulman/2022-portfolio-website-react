import React from "react"
import Section from "@/components/General/Section"
import SmallBar from "@/components/General/SmallBar"
import Card from "@/components/General/Card"
import SplitPane from "@/components/General/SplitPane"
import BannerImage from "@/assets/banner-home.svg"
import projectOneImage from "@/assets/project-1.svg"
import projectTwoImage from "@/assets/project-2.svg"
import projectThreeImage from "@/assets/project-3.svg"

export default function Projects(){
    let cards=[
        {
            classes:{
                root:'flex flex-row items-start',
                title:'font-bold text-4xl',
                description:'my-1'
            },
            direction:'vertical',
            title:'Autumn Doors',
            description:[" Designed, developed, and deployed an eCommerce website that sold interior, sliding, barn doors in Texas and Florida.", "Technologies used were Javascript, HTML, CSS, React (Material UI Components), React Router (Routing), Redux (Stage Management), NodeJS (Express Framework), NodeMailer (Email), Stripe SDK"],
            controls:[
                <a className="bg-emerald-500 text-white px-1 py-2">Live Site</a>
            ],
            media:{}
        },
        {
            classes:{
                root:'flex flex-row items-start',
                title:'font-bold text-4xl',
                description:'my-1'
            },
            direction:'vertical',
            title:'The PAVE Foundation',
            description:[" Designed, developed, and deployed a non-profit's that teaching STEM and Arts Education to African American Girls. I continued on, post-development, as their Technology Director.", "Technologies used were Javascript, HTML, CSS, React (Material UI Components), React Router (Routing), Redux (Stage Management), NodeJS (Express Framework), NodeMailer (Email), Stripe SDK"],
            controls:[
                <a className="bg-emerald-500 text-white px-1 py-2">Live Site</a>
            ],
            media:{}
        },
        {
            classes:{
                root:'flex flex-row items-start',
                title:'font-bold text-4xl',
                description:'my-1'
            },
            direction:'vertical',
            title:'This Portfolio Website',
            description:[" Designed, developed, and deployed as an example of my React capabilities. It has an emphasis on reusable components, well organized files and folder structures, and is publicly available", "Technologies used were Tailwind CSS, React, React Router (Routing), and Vite."],
            controls:[
                <a className="bg-sky-600 text-white px-1 py-2">React Code</a>
            ],
            media:{}
        },
    ]


    //  function renderCard(card){
    //     const {classes,direction,title,description,controls,media}=card 
    //                return(  
    //                  <Card
    //                      size="md"
    //                      classes={classes}
    //                      direction={direction}
    //                      media={media}
    //                      title={title}
    //                      description={description}
    //                      controls={controls}
    //                  />
    //                )
    //  }
    // const {classes,direction,title,description,controls,media}=card 
    function renderPanes(cards){
        return cards.map((card,i)=>{
            const {classes,direction,title,description,controls,media}=card 
            return  <SplitPane
                            key={i}
                            left={
                                <img key={i} className="border-2 border-solid rounded-xl border-emerald-500 mr-12 h-[300px] w-[600px]" src={projectOneImage} alt="project image"/>
                            }
                            right={
                                <Card
                                    size="md"
                                    key={`Projects_${i}`}
                                    classes={classes}
                                    direction={direction}
                                    media={media}
                                    title={title}
                                    description={description}
                                    controls={controls}
                                />
                            
                            }
                            classes={{
                                root:'my-10',
                                left:'w-2/3 flex flex-row justify-end items-center',
                                right:'w-1/3 flex flex-row justify-start'
                            }}
                        />
        })
    }
    return(
        <Section className="w-full ">
            <SmallBar className=" m-auto mr-0"/>
            <h2 className=' text-right text-4xl'>Projects</h2>
            {renderPanes(cards)}
{/*             
                    <SplitPane
                        key={'0'}
                        left={
                            <img className="border-2 border-solid rounded-xl border-emerald-500 mr-12 h-[300px] w-[600px]" src={projectOneImage} alt="project image"/>
                        }
                        right={
                            renderCard(cards[0],0)
                        
                        }
                        classes={{
                            root:'my-10',
                            left:'w-2/3 flex flex-row justify-end items-center',
                            right:'w-1/3 flex flex-row justify-start'
                        }}
                    />
                    <SplitPane
                       key={'1'}
                        left={
                            <img className="border-2 border-solid rounded-xl border-emerald-500 mr-12 h-[300px] w-[600px]" src={projectTwoImage} alt="project image"/>
                        }
                        right={
                            renderCard(cards[1],1)
                        
                        }
                        classes={{
                            root:'my-10',
                            left:'w-2/3 flex flex-row justify-end',
                            right:'w-1/3 flex flex-row justify-start'
                        }}
                    />
                    <SplitPane
                       key={'2'}
                        left={
                            <img className="border-2 border-solid rounded-xl border-emerald-500 mr-12 h-[300px] w-[600px]" src={projectThreeImage} alt="project image"/>
                        }
                        right={
                            renderCard(cards[2],2)
                        
                        }
                        classes={{
                            root:'my-10',
                            left:'w-2/3 flex flex-row justify-end',
                            right:'w-1/3 flex flex-row justify-start'
                        }}
                    />
                         
                        */}
        </Section>
    )
}