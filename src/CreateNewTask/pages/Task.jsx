import React from "react"
import { Link } from "react-router-dom"

export function Task(props) {
    console.log(props)

    return (
        <Link to={'/edittask'}>
            <div className="alltask_item">
                <div><span>Title</span>: {props.title}</div>
                <div><span>Creator</span>: {props.creator}</div>
                <div><span>Status</span>: {props.status}</div>
                <div><span>Description</span>: {props.description}</div>
            </div> 
        </Link>
        
    )
}