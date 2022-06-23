import React, { useContext, useEffect, useState } from "react";
import { TodoTaskContext } from "../../App";
import "./index.css"
import {v4} from 'uuid'
import { Link } from "react-router-dom";


const TASK_LIST_KEY = 'TASK_LIST'
export default function CreateTask(props) {
    
    const [newTaskTilte, setNewTaskTilte] = useState('');
    const [newTaskCreator, setNewTaskCreator] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const {taskList, updateTaskList} = useContext(TodoTaskContext)
    
    useEffect(() => {
        const storedTaskList = localStorage.getItem('TASK_LIST')
        if(storedTaskList === null) {
            updateTaskList([])
            return;
        }
        updateTaskList(JSON.parse(storedTaskList));
    }, [])
    

    const handleNewTaskValue = (e) => {
        setNewTaskTilte(e.target.value);
    }
    const handleNewTaskCreator = (e) => {
        setNewTaskCreator(e.target.value);
    }
    const handleNewTaskDescription = (e) => {
        setNewTaskDescription(e.target.value);
    }
    const Save = (title) => {
        if(title === '') return;
        props.onTaskItemSubmit(newTaskTilte)
        props.onTaskItemSubmit(newTaskCreator)
        props.onTaskItemSubmit(newTaskDescription)

        setNewTaskTilte('');
        setNewTaskCreator('');
        setNewTaskDescription('');


        const newTaskList = [
            {
                id: v4(),
                title: newTaskTilte,
                creator: newTaskCreator,
                status: 'New',
                description: newTaskDescription
            }, 
            ...taskList,
        ]
        updateTaskList(newTaskList)
        localStorage.setItem(TASK_LIST_KEY, JSON.stringify(newTaskList))
    }

    return (
        <div className="createTask">
            <p><span>Tilte</span><input onChange={handleNewTaskValue} type="text" placeholder="Place holder" value={newTaskTilte}/></p>
            <p><span>Creator</span><input onChange={handleNewTaskCreator}  type="text" placeholder="Name of Creator" value={newTaskCreator}/></p>
            <p><span>Description</span><input onChange={handleNewTaskDescription} type="text" placeholder="Description Details" value={newTaskDescription}/></p>
            <Link to={'/alltask'}>
                <button onClick={Save}>Save</button>
            </Link>
        </div>  
    )
}