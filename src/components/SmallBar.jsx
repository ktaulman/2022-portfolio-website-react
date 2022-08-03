import React from 'react';

export default function SmallBar({className}){
    return(
        <div className={"w-16 h-1 rounded-full bg-gradient-to-r from-slate-200 to-cyan-800 "+className}></div>
    )
}