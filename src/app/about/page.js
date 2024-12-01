
import styles from "../page.module.css";
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { About } from "@/app/components/About";

export default function Home() {
    return (
        <div>
            <NavBar />
            <About />
            <Footer />
        </div>
    );
}