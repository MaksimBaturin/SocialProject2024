// app/components/Courses.jsx
import Link from 'next/link';
import styles from "../page.module.css";

export function Courses() {
    return (
        <section id="courses" className="content">
            <div className="container">
                <div className="course-section">
                    <h3>1. Определение управления временем</h3>
                    <ul>
                        <li>
                            <Link href={"/courses/time-management"}>
                                <span className="course-icon">&#128337;</span>
                                Что такое управление временем? Определение, важность для студентов.
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/basic-principles"}>
                                <span className="course-icon">&#128203;</span>
                                Основные принципы: SMART, Парето, ABC-анализ.
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/mistakes"}>
                                <span className="course-icon">&#128204;</span>
                                Типичные ошибки студентов: Прокрастинация, неэффективное планирование, перегрузка.
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="course-section">
                    <h3>2. Планирование и постановка целей</h3>
                    <ul>
                        <li>
                            <Link href={"/courses/smart"}>
                                <span className="course-icon">&#128214;</span>
                                Как ставить цели? Правила SMART, примеры целей для студентов
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/plan-developing"}>
                                <span className="course-icon">&#128195;</span>
                                Разработка плана: Создание ежедневного, еженедельного, ежемесячного плана
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/planing-instruments"}>
                                <span className="course-icon">&#128207;</span>
                                Приложения и инструменты для планирования
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/overstrain"}>
                                <span className="course-icon">&#128293;</span>
                                Как избежать перегрузки?
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="course-section">
                    <h3>3. Организация рабочего пространства</h3>
                    <ul>
                        <li>
                            <Link href={"/courses/work-setup"}>
                                <span className="course-icon">&#128105;</span>
                                Как организовать рабочее место для эффективной учебы?
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/pomodoro"}>
                                <span className="course-icon">&#127813;</span>
                                Использование техники "Помидор" (Pomodoro):
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/distractions"}>
                                <span className="course-icon">&#128269;</span>
                                Как бороться с отвлекающими факторами?
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="course-section">
                    <h3>4. Управление задачами и проектами</h3>
                    <ul>
                        <li>
                            <Link href={"/courses/task-managing"}>
                                <span className="course-icon">&#128197;</span>
                                Как эффективно управлять задачами?
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/team-work"}>
                                <span className="course-icon">&#128188;</span>
                                Работа в команде
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses/procrastination"}>
                                <span className="course-icon">&#128342;</span>
                                Как справляться с прокрастинацией?
                            </Link>
                        </li>
                    </ul>
                    <div className="course-section">
                        <h3>5. Здоровый образ жизни</h3>
                        <ul>
                            <li>
                                <Link href={"/courses/healthy-lifestyle"}>
                                    <span className="course-icon">&#127947;</span>
                                    Важность здорового образа жизни
                                </Link>
                            </li>
                            <li>
                                <Link href={"/courses/time-balance"}>
                                    <span className="course-icon">&#128338;</span>
                                    Баланс между учебой и отдыхом
                                </Link>
                            </li>
                            <li>
                                <Link href={"/courses/sleep-importance"}>
                                    <span className="course-icon">&#128164;</span>
                                    Роль сна в эффективности
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}