/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTask from "./NoTask";


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
  /* edit button e click korle update modal
   e show korte ei taskToUpdate call kora hoyeche */
  const [taskToUpdate,setTaskToUpdate] = useState(null);

   function handleAddEditTask(newTask,isAdd){

    if(isAdd){
      setTask([...task,newTask]);
    }
    else{
      setTask(
        task.map((t)=>{
          // task er upore map chalanor por jekhane task id ta match hocce sekhane purona ta bad diye notun ta dhukano hocce
          if(t.id === newTask.id){
            return newTask;
          }
          return t;
        })
      );
    }

    // button click howar por modal close hobe 
    setShowModal(false);
   } 

   function handleEditTask(task){ 
     setTaskToUpdate(task);
     setShowModal(true);
   }

   function handleCloseClick(){
     setShowModal(false);
     setTaskToUpdate(null);
   }

   function handleDeleteTask(id){
    setTask(
      task.filter((t) => t.id !== id)
    );
   }
   function handleDeleteAll(){
    task.length = 0;
    setTask([...task]);
   }

   function handleFavoriteTask(tasId){
    setTask(
      task.map((t)=>{
        if(t.id === tasId){
          return {...t, isFavorite: !t.isFavorite}
        }
        return t;
      })
    )

   }

   function handleSearch(searchTerm){
    console.log(searchTerm);
    const filtered = task.filter((t) => t.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setTask([...filtered]);

   }
  return (
    <>
      <section className="mb-20" id="tasks">
        {ShowModal && <AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} onCloseClick={handleCloseClick}/>}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch}/>
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           
           <TaskAction onDeleteAll={handleDeleteAll} onAddClick={() => setShowModal(true)}/>

          {
            task.length > 0 ? (
              <TaskList
              onFav={handleFavoriteTask}
               task={task} 
              onEdit={handleEditTask} 
              onDelete={handleDeleteTask}/>
            ): (
              <NoTask/>
            )
          }

          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
