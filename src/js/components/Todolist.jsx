import { useState } from "react";
import React from "react";

const Todolist = () => {

    const [Todo, setTodo] = useState("");
    const [TodoList, setTodoList] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && Todo.trim() !== "") {
            setTodoList([...TodoList, { text: Todo, completed: false }]);
            setTodo("");
        }
    };

    const handleDelete = (indexToDelete) => {
        setTodoList(TodoList.filter((_, index) => index !== indexToDelete));
    };

    const toggleComplete = (index) => {
        const updatedList = [...TodoList];
        updatedList[index].completed = !updatedList[index].completed;
        setTodoList(updatedList);
    };

    return (
        <>
            <div className="container border border-dark w-50 border-opacity-25 fw-light bg-white" style={{ height: "50px" }}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyPress} value={Todo} style={{ height: "100%" }} className="border border-0 fs-3 fw-light w-100" />
            </div>
            <div className="">
                {TodoList.map((item, index) => (
                    <div key={index} className="todo-item d-flex justify-content-between align-items-center border border-dark w-50 m-auto ps-5 fs-3 pe-2 fw-light border-opacity-25 bg-white text-break" style={{ height: "50px", height: "100%" }}>
                        <span
                            onClick={() => toggleComplete(index)}
                            style={{
                                cursor: "pointer",
                                
                                fontSize: "1.5rem"
                            }}
                        >
                            {item.completed ? "✅" : "⬜"}
                        </span>

                        <span
                            className="flex-grow-1"
                            style={{
                                textDecoration: item.completed ? "line-through" : "none",
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}
                        >
                            {index + 1}. {item.text}
                        </span>
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