import Link from 'next/link';
export function NavBar() {
    return <header>
        <div className="container">
            <h1>Социальный проект: StudyFlow</h1>
            <nav>
                <ul className="menu">
                    <li>
                        <Link href={"/"}>Главная</Link>
                    </li>
                    <li>
                        <Link href={"/courses"}>Курсы</Link>
                    </li>
                    <li>
                        <Link href={"/pomodoro"}>Pomodoro</Link>
                    </li>
                    <li>
                        <Link href={"/to-do"}>To-do list</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>О нас</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}