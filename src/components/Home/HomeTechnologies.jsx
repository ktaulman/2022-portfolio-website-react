import React from 'react';
//components
import SmallBar from "@/components/SmallBar"
//images
import aws from "@/assets/technologies/aws.svg"
import css from "@/assets/technologies/css.svg"
import express from "@/assets/technologies/express.svg"
import google from "@/assets/technologies/google.svg"
import html from "@/assets/technologies/html.svg"
import js from "@/assets/technologies/js.svg"
import node from "@/assets/technologies/node.svg"
import postgresql from "@/assets/technologies/postgresql.svg"
import reactImage from "@/assets/technologies/react.svg"
import redux from "@/assets/technologies/redux.svg"
import stripe from "@/assets/technologies/stripe.svg"
import tailwind from "@/assets/technologies/tailwind.svg"
import vue from "@/assets/technologies/vue.svg"

export default function HomeTechnologies(){
    const images=[aws,css,express,google,html,js,node,postgresql,reactImage,redux,stripe,tailwind,vue]
    
    function renderImages(images){
        return images.map((image)=><img src={image} className="w-[150px] h-[75px]" alt='technology used'/>
        )
    }
    
   return(  
    <>
    <SmallBar/>
    <h2 className="text-2xl">Technologies</h2>
    <div className="flex flex-row flex-wrap">

    {renderImages(images)}
    </div>
    </>
   )
}