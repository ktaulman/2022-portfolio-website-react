import React from 'react';

export default function Home (){
    //Card Component
    function Card ({size, classes, children}){
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
            <section className={calculateSize(size,classes)}>
                {children}
            </section>
        )
    }
    //Split Pane Component
    function SplitPane({left,right,classes}){
        return(
            <section className={`w-full h-full flex ${classes.root}`}>
                <div className={classes.left}>{left}</div>
                <div className={classes.right}>{right}</div>
            </section>
        )
    }
    function HomeBanner(){
        return(
            <div className="w-full h-48 border-solid border-black border-2 ">
                 <SplitPane 
                    classes={
                        {
                            root:"border-1 border-black",
                            left:'w-1/6',
                            right:"w-5/6"
                        }
                    }
                    left={
                        <Card class="flex column" size='md'>
                            
                        </Card>
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