import React from "react";
import { useState } from "react";

const AddTaskModal = ({onSave, taskToUpdate,onCloseClick}) => {
    const [task, setTask] = useState(taskToUpdate || {
        /*jodi taskToUpdate thake tobe eta 
        initial value othobar ekti empty object*/
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavorite: ""
    });

    const [isAdd,setIsAdd] = useState(Object.is(taskToUpdate, null));
    /*Object.is(taskToUpdate, null) = true hobe jokhon taskToUpdate er value null thakbe*/

    const handleChange = (e) => {
        let name = e.target.name; /*prothom input er khetre title
         ber hobe name er value jeti state er title ke bujhabe*/ 
        let value = e.target.value;

        if(name === "tags"){
            value = value.split(",");
        }

        setTask({...task, [name]: value});
    }


  return (
    <>
    <div className="bg-black bg-opacity-50 h-full w-full z-10 absolute top-0 left-0">

    </div>
      <div className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11
      z-10 absolute top-1/4 left-1/3
      ">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add Task" : "Update Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
           /* input field er name er value er sathe sate er value er mil thakte hobe*/
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              /* input field er name er value er sathe sate er value er mil thakte hobe*/
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                /* input field er name er value er sathe sate er value er mil thakte hobe*/
                name="tags"
                id="tags"
                value={task.tags}
              onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                /* input field er name er value er sathe sate er value er mil thakte hobe*/
                name="priority"
                id="priority"
                value={task.priority}
              onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
        <button
            onClick={onCloseClick}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            onClick={() => onSave(task, isAdd)}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
