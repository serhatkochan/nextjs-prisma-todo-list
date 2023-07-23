import React from 'react';

interface TodoItemProps {
    id: string;
    title: string;
    done: boolean
    createAt: Date;
    updateAt: Date;
}

const TodoItem = ({id, title, done, createAt, updateAt}: TodoItemProps) => {
    return (
        <li className="flex items-center gap-6">
            <input type="checkbox" defaultChecked={done} />
            <div className="flex flex-col gap-1">
                <h2>{title}</h2>
                <p className="text-gray-500">{updateAt.toLocaleDateString()}</p>
            </div>
        </li>
    );
};

export default TodoItem;