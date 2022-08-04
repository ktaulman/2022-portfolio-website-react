import React from 'react';
import SplitPane from '@/components/SplitPane'

export default function About(){
    return(
    <section>

        <SplitPane
            left={
                "left"
            }
            right={
                "right"
            }
            classes={{
                left:'w-1/2',
                right:'w-1/2',
                
            }}
        />
    </section>
    
    )
}