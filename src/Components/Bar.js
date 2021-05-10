import React from 'react'
import "./Bar.css"

export default function Bar({height,otherData}) {
    return (
        <div className="bar" style={{height:`${height*500}px`}}>
            <p>{otherData}</p>
        </div>
    )
}
