import React from 'react';
import Card from "@/components/Card"
import Section from "@/components/General/Section"
import { AcademicCapIcon,CubeIcon } from '@heroicons/react/solid';

export default function HomeCards(){
        //cards
        const cards=[
            //Card 1
            {
                classes:{
                    root:'bg-violet-500 py-10 px-6 w-60',
                    title:'font-bold uppercase text-black text-xl text-center py-3',
                    description:'text-md text-black text-center py-3',
                    
                },
                direction:'vertical',
                media:{
                    type:'icon',
                    src:<AcademicCapIcon className=' text-white w-20'/>,
                },
                title:'Cross-Industry Experience',
                description:['Before web development, I worked with business and technology leaders when choosing their technology platforms in both IT research and the Cloud.'],
            },
            //Card 2 
            {
                classes:{
                    root:'bg-violet-500 py-10 px-6 w-60',
                    title:'font-bold uppercase text-black text-center text-xl py-3',
                    description:'text-md text-black text-center py-3',
                    
                },
                direction:'vertical',
                media:{
                    type:'icon',
                    src:<CubeIcon className='text-white w-20'/>,
                },
                title:'Full Stack Development',
                description:["For me, it's nice to know all sides of the process. Whatever technology will help us build apps, I'll learn. "],
            },
            //Card 3 
            {
                classes:{
                    root:'bg-violet-500 py-10 px-6 w-60',
                    title:'font-bold uppercase text-black text-center text-xl py-3',
                    description:'text-md text-black text-center py-3',
                    
                },
                direction:'vertical',
                media:{
                    type:'icon',
                    src:<AcademicCapIcon className='text-white w-20'/>,
                },
                title:'Cross-Industry Experience',
                description:['Before web development I did .....','Technologies used were'],
            },
    
        ];
        //rendering 
        function renderCards(cards){
            return cards.map((card)=>{
                     const {classes,direction,title,description,controls,media}=card 
                       return(  
                         <Card
                             key={card}
                             size="md"
                             classes={classes}
                             direction={direction}
                             media={media}
                             title={title}
                             description={description}
                             controls={controls}
                         />
                       )
             })
         }
    return(
            <Section className="w-full py-4 flex justify-evenly">
                {renderCards(cards)}
            </Section>
    )
}