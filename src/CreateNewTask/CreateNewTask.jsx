import React, { useContext } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import AllTask from "./pages/AllTask";
import DoingTask from "./pages/DoingTask";
import DoneTask from "./pages/DoneTask";
import NewTask from "./pages/NewTask";
import './createnewtask.css'
import CreateTask from "./pages/CreateTask";
import { v4 } from 'uuid';
import { TodoTaskContext } from "../App";
import EditTask from "./pages/Edittask";

const TASK_LIST_KEY = 'TASK_LIST'
export default function CreateNewTask() {

    const {taskList, updateTaskList} = useContext(TodoTaskContext)

    const handleTaskSubmit = (title) => {

    }
    return (
        <div className="App"> 
            <BrowserRouter className="menu">
                <Header/>
                <div className="body">
                    <Menu/>
                    <Routes>
                        <Route path="/createfile" element={<CreateTask onTaskItemSubmit={handleTaskSubmit} />}/>
                        <Route path="/alltask" element={<AllTask taskList = {taskList}/>}/>
                        <Route path="/newtask" element={<NewTask/>}/>
                        <Route path="/doingtask" element={<DoingTask/>}/>
                        <Route path="/donetask" element={<DoneTask/>}/>
                        <Route path="/edittask" element={<EditTask/>}/>
                    </Routes>
                </div>
            
            </BrowserRouter>
        </div>
    )
}