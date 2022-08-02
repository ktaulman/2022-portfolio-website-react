import React from "react";

export default function Card ({size, classes, children}){
    //rendersizer
    const calculateSize=(cardSize,classes)=>{
            let size;
            switch(cardSize){
                case 'sm':
                    size= 'w-64'
                    break;
                case 'md':
                    size='w-80'
                    break;
                case 'lg':
                    size='w-96'
                    break;
                case 'full':
                    size="w-full"
                    break;
                default:
                    size="w-64"
                    break;
            }
            return size+classes;
    }
    //render
    return(
        <section className={calculateSize(size)}>
            {children}
        </section>
    )
}