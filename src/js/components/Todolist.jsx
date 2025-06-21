import { useState } from "react";
import React from "react";

const Todolist = () => {

    const [Todo, setTodo] = useState("");
    const [TodoList, setTodoList] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && Todo.trim() !== "") {
            setTodoList([...TodoList, Todo]);
            setTodo("");
        }
    };

    const handleDelete = (indexToDelete) => {
        setTodoList(TodoList.filter((_, index) => index !== indexToDelete));
    };

    return (
        <>
            <div className="container border border-dark w-50 border-opacity-25 fw-light bg-white" style={{ height: "50px" }}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyPress} value={Todo} className="border border-0 fs-3 fw-light" />
            </div>
            <div className="">
                {TodoList.map((item, index) => (
                    <div key={index} className="todo-item d-flex justify-content-between align-items-center border border-dark w-50 m-auto ps-5 fs-3 pe-2 fw-light border-opacity-25 bg-white" style={{ height: "50px" }}>
                        <span>{index + 1}. {item}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            className="delete-btn btn btn-link p-0 text-dark"
                            style={{ fontSize: "1.5rem" }}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                ))}
            </div>
            <div className="container d-flex border border-dark w-50 border-opacity-25 bg-white" style={{ height: "30px" }}>
                <p className="fs-6 fw-lighter">
                    {TodoList.length} items left
                </p>
            </div>
        </>
    );
};

export default Todolist;