import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

export default function Header() {
    
    return (
        <div className="header">
            <Link to={'/createfile'}>
                <button className="create">Create New Task</button>
            </Link>
            <input type="text" placeholder="Type something to search"/>
            <button className="create">Search</button>
        </div>
    )
}