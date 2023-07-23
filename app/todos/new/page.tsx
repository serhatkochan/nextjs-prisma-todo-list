import {redirect} from "next/navigation";
import {prisma} from "@/app/db";

const createTodo = async (data: FormData) => {
    "use server"; // browser yerine server tarafında çalıştırabilmek için "use server" eklememiz gerekiyor

    const title = data.get('title')?.valueOf();
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("Title is required");
    }

    await prisma.todo.create({data: {title}});
    redirect("/todos");
}

const NewTodoPage = () => {
    return (
        <form action={createTodo} className="p-6 flex flex-col gap-4">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="bg-gray-200 py-2 px-2 rounded"
            />
            <button type="submit" className="bg-green-500 text-white py-2 rounded">Create</button>
        </form>
    );
};

export default NewTodoPage;