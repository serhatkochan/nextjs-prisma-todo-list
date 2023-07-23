import React from 'react';
import {prisma} from "@/app/db";

const Page = async () => {
    const todos = await prisma.todo.findMany(); // her şeyi döndür
    return (
        <div>
            Todos Page
        </div>
    );
};

export default Page;