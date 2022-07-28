import React from 'react';

export default function Projects(){
    //MapSimply, AutumnDoors, The Pave Foundation, Portfolio
    const projects=[
        {
            title:'',
            description:'',
            imgURL:'',
            logos:[''],
            links:[
                {
                    title:'',
                    url:''
                }
            ]
            
        }
    ]
    function renderProjectCard(projects){
        return projects.map(project=>{
            <section>

            </section>
        })
    }
    return(
        <main>
            {
                renderProjectCard(projects)
            }
        </main>
    )
}