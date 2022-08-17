import React from "react"


export default function SplitPane({left,right,classes}){
    return(
        <section className={"flex "+classes.root}>
            <div className={classes.left}>{left}</div>
            <div className={classes.right}>{right}</div>
        </section>
    )
}