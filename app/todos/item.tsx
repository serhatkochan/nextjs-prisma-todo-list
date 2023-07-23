"use client";

interface TodoItemProps {
    id: string;
    title: string;
    done: boolean
    createAt: Date;
    updateAt: Date;
    toggleTodo: (id: string, done: boolean) => void;
}

const TodoItem = ({id, title, done, createAt, updateAt, toggleTodo}: TodoItemProps) => {
    return (
        <li className="flex items-center gap-6">
            <input
                type="checkbox"
                defaultChecked={done}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <div className="flex flex-col gap-1">
                <h2>{title}</h2>
                <p className="text-gray-500">{updateAt.toLocaleDateString()}</p>
            </div>
        </li>
    );
};

export default TodoItem;