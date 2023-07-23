import React from 'react';
import {prisma} from "@/app/db";

const handleGetTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2sn elle bekleticez
    return prisma.todo.findMany();
}

const Page = async () => {
    const todos = await handleGetTodos(); // her şeyi döndür
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default Page;