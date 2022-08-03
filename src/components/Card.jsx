import React from "react";

export default function Card ({size, classes, children, title,direction,description}){
    //rendersizer
    const calculateCSS=(cardSize,direction,rootClass)=>{
            let size;
            let dir; 
            let root;
            //compute cardSize
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
            //compute direction
            switch(direction){
                case 'vertical':
                    dir='flex flex-col justify-center items-center'
                    break;
                default:
                    dir="flex flex-row justify-start items-center"
                    break; 
            }
            //compute root cllas
            root=rootClass?rootClass:''
            
            size=size+" "+dir+" "+root+" "+"rounded-xl";

            return size;
    }
    function renderDescription(description,css){
        return description.map(paragraph=><p className={css?css:''}>{paragraph}</p>)
    }
    
    return(
        <section className={calculateCSS(size,direction,classes.root)}>
            {/*Title */}
            <h2 className={classes.title} alt={title}>{title}</h2>

            {/* Description */}
            {
                renderDescription(description,classes.description)
            }

            {/* Flexible Area for Buttons,Icons,Liks */}
            {children}
        </section>
    )
}