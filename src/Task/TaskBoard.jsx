/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {

  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description: "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "python", "javascript"],
    priority: "High",
    isFavorite: true
  }

  const [task,setTask] = useState([defaultTask]);
  const [ShowModal,setShowModal] = useState(false);

  

  return (
    <>
      <section className="mb-20" id="tasks">
{ShowModal && <AddTaskModal/>}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           
           <TaskAction onAddTask={()=>setShowModal(true)}/>

            <TaskList task={task}/>

          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
