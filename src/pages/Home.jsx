import React from 'react';

export default function Home (){
    //CardComponent
    function Card ({size,children}){
        //rendersizer
        const calculateSize=(cardSize)=>{
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
                return size;
        }
        //render
        return(
            <section className={calculateSize(size)}>
                {children}
            </section>
        )
    }
    function SplitPane({left,right}){
        return(
            <section className="w-full h-full flex">
                <div className={classes.left}>{left}</div>
                <div className={classes.right}>{right}</div>
            </section>
        )
    }
    function HomeBanner(){
        return(
            <div className="w-full h-24">
                 <SplitPane 
                    classes={
                        {left:'w-1/6',
                        right:"w-5/6"}
                    }
                    left={
                        <div>Left</div>
                    }
                    right={
                        <div>Right</div>
                    }
                />
            </div>
        )
    }

    
    return(
        <main>
            <HomeBanner/>
            {/* 
            //Banner - Row 
                //Intro (L = Title, Text, R=Img/GIF)

            <br/>
            //Bar- Row
                //Card- SM-3x (Icon + Experience Title + Exp. Description)
            //Section- Full - Row 
                // Card= LG - (L= About Me + Text , R= Photo)
            //Section - Full
                //Title- Full
            /Section- Column
                //Card (L = Img , R = Title + Text + 2 x Buttons) 
            */}
        </main>
    )
}