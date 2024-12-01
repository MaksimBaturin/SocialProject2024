
import styles from "../page.module.css";
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { Courses } from "@/app/components/Courses";

export default function Home() {
    return (
        <div>
            <NavBar />
            <Courses />
            <Footer />
        </div>
    );
}