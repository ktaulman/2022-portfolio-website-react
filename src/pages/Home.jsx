import React from 'react';
import Card from "../components/Card"
import SplitPane from '../components/SplitPane';

export default function Home (){
    //Card Component
    
    //Split Pane Component
  
    function HomeBanner(){
        return(
            <div className="w-64 h-48 border-solid border-black border-2 ">
                 <SplitPane 
                    classes={
                        {
                            root:"w-full border-1 border-black",
                            left:'w-1/2 border-2 border-solid border-red-600',
                            right:"w-1/2 border-2 border-solid border-blue-600"
                        }
                    }
                    left={
                        <Card class="flex column" size='md'>
                            "left"
                        </Card>
                    }
                    right={
                        <Card class="flex column" size='md'>
                          "left"
                        </Card>
                    }
                />
            </div>
        )
    }

    
    return(
        <main>
            {/* Banner */}
            <SplitPane 
                    classes={
                        {
                            root:"w-64  border-1 border-black",
                            left:'w-1/6 border-2 border-solid border-red-600',
                            right:"w-5/6 border-2 border-solid border-blue-600"
                        }
                    }
                    left={
                        <div>
                            <p>Hello, my name is</p>
                            <h1>Kevin Taulman</h1>
                            <p>
                                I build web applications.
                            </p>
                            <div>
                                <a>Button</a>
                                <a>Github Image</a>
                                <a>Linkedin Image</a>
                            </div>
                        </div>
                    }
                    right={
                        <div>Right</div>
                    }
                />
            
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