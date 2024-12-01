"use client"
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";

import ToDoList from "@/app/components/To-Do";


export default function Home() {

    return (
        <div>
            <NavBar />
            <ToDoList />
            <Footer />
        </div>
    );
}