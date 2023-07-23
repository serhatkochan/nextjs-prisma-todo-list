import React from 'react';
import Link from "next/link";

import {prisma} from "@/app/db";
import TodoItem from "@/app/todos/item";

const handleGetTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1)); // 2sn elle bekleticez
    return prisma.todo.findMany();
}

const Page = async () => {
    const todos = await handleGetTodos(); // her şeyi döndür
    return (
        <div className="p-6 flex flex-col gap-6">
            <Link
                href="/"
                className="bg-green-500 text-center text-white py-2 rounded"
            >
                Create new Todo
            </Link>
            <ul className="flex flex-col gap-4">
                {todos.map((todo) => (
                    <TodoItem {...todo} />
                ))}
            </ul>
        </div>
    );
};

export default Page;