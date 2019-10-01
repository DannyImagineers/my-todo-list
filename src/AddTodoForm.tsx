import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    /* Handle Change */
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }
    /* Add todo aan list */
    const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
    }
    /* Remove todo van list | Work in progress */
    return (    
        <form>
            <input placeholder="Enter your task here" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
            <button type="submit" onClick={handleDelete}>Delete Todo</button>
        </form>
    );
};
    /* Buttons en input */