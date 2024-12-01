
import styles from "../page.module.css";

export function About() {
    return (
        <section id="about" className="content">
            <div className="container">
                <h2>О нас</h2>
                <div className="team">
                    <div className="team-member">
                        <h3>Батурин Максим</h3>
                        <p>Fullstack-разработчик</p>
                    </div>
                    <div className="team-member">
                        <h3>Асан Смаилов</h3>
                        <p>Руководил проектом, раздавал задачи и следил за их выполнением, при необходимости помогал своим сокомандникам.</p>
                    </div>
                    <div className="team-member">
                        <h3>Эмир Бужуров</h3>
                        <p>Подготовка теоритических материалов</p>
                    </div>
                </div>
            </div>
        </section>
    );
}