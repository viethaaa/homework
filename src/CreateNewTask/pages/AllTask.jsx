import React from "react";
import { Task } from "./Task";
import "./index.css"
export default function AllTask(props) {

    return (
        <div className="alltask">
            {
                props?.taskList?.map(item => <Task key={item.id} {...item}/>)
            }
        </div>
    )
}