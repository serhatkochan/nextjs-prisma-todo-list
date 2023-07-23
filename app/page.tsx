import React from 'react';
import {redirect} from "next/navigation";

const Page = () => {
    redirect("/todos");
};

export default Page;