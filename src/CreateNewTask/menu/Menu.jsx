import React from "react";
import { Link } from "react-router-dom";
import { SidebarDate } from "./SidebarData";
import "./menu.css"

export default function Menu() {
    return (
        <div className="menu">
            {SidebarDate.map((item,index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}