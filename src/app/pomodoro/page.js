
import styles from "../page.module.css";
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import PomodoroTimer from "@/app/components/PomodoroTimer";

export default function Home() {
    return (
        <div>
            <NavBar />
            <PomodoroTimer/>
            <Footer />
        </div>
    );
}