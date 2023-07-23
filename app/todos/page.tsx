import React from 'react';
import {prisma} from "@/app/db";

const Page = async () => {
    const todos = await prisma.todo.findMany(); // her şeyi döndür

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default Page;