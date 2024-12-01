import { NavBar } from '../../components/NavBar';
import { TopicNavigation } from '../../components/TopicNavigation';
import {Footer} from "@/app/components/Footer";
export default function PlanningPage() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="content">
                    <h2>Разработка плана: Создание ежедневного, еженедельного, ежемесячного плана</h2>

                    <h3>1) Зачем нужен план?</h3>
                    <p className="important-text">
                        Планирование помогает студентам:
                    </p>
                    <ul className="styled-list">
                        <li>Систематизировать задачи: Все задачи фиксируются и распределяются во времени.</li>
                        <li>Избегать хаоса: Упрощается процесс работы, так как вы знаете, что делать и когда.</li>
                        <li>Сохранять баланс: Планирование позволяет выделять время как на учёбу, так и на отдых.</li>
                    </ul>
                    <p>
                        Хорошо организованный план — это основа для выполнения любых целей, будь то подготовка к экзамену, написание курсовой работы или выполнение повседневных обязанностей.
                    </p>

                    <h3>2) Ежедневное планирование</h3>
                    <p className="important-text">
                        Цель: Управление задачами на ближайший день.
                    </p>
                    <p>
                        Вечером или утром составьте список задач на день.
                        <br />
                        Пример: "Прочитать главу 3, сделать домашнее задание по физике, подготовить презентацию."
                    </p>
                    <p>
                        Используйте правило 3-х главных задач:
                        <br />
                        Выделите 3 ключевые задачи, которые необходимо выполнить. Остальные задачи классифицируйте как второстепенные.
                    </p>
                    <p>
                        Рекомендации:
                    </p>
                    <ul className="styled-list">
                        <li>Учитывайте свои биоритмы: выполняйте сложные задачи, когда уровень энергии максимален.</li>
                        <li>Планируйте перерывы: отдых каждые 1–2 часа работы.</li>
                    </ul>
                    <p>
                        Пример ежедневного плана:
                    </p>
                    <ul className="styled-list">
                        <li>08:00–08:30 — Утренняя зарядка и завтрак.</li>
                        <li>09:00–11:00 — Подготовка к экзамену по математике (решение задач).</li>
                        <li>11:15–12:00 — Повторение лекции по физике.</li>
                        <li>12:00–13:00 — Обед и отдых.</li>
                        <li>14:00–16:00 — Работа над презентацией.</li>
                    </ul>

                    <h3>3) Еженедельное планирование</h3>
                    <p className="important-text">
                        Цель: Обзор и организация задач на неделю.
                    </p>
                    <p>
                        Выделите время для составления плана:
                        <br />
                        Начинайте планировать в воскресенье вечером или утром в понедельник. Оцените предстоящие события: дедлайны, экзамены, встречи.
                    </p>
                    <p>
                        Разделите задачи на категории:
                    </p>
                    <ul className="styled-list">
                        <li>Учёба: "Сдать проект", "Подготовиться к контрольной".</li>
                        <li>Личная жизнь: "Встреча с друзьями", "Спорт".</li>
                        <li>Отдых: "Посетить кино", "Читать книгу".</li>
                    </ul>
                    <p>
                        Определите приоритеты:
                        <br />
                        Используйте ABC-анализ для распределения задач по важности. Учитывайте принцип Парето: 20% задач дают 80% результата.
                    </p>
                    <p>
                        Используйте гибкие планы:
                        <br />
                        Оставляйте немного свободного времени для неожиданных задач.
                        <br />
                        Пример: Планируйте 70% времени, оставляя 30% для корректировок.
                    </p>
                    <p>
                        Инструменты для еженедельного планирования:
                    </p>
                    <p>
                        Пример еженедельного плана:
                    </p>
                    <ul className="styled-list">
                        <li>Понедельник: Начать подготовку к проекту, решить задачи по алгебре.</li>
                        <li>Среда: Сдать отчёт, обсудить курсовую с преподавателем.</li>
                        <li>Пятница: Финализировать презентацию, провести встречу в группе.</li>
                    </ul>

                    <h3>4) Ежемесячное планирование</h3>
                    <p className="important-text">
                        Цель: Определить основные задачи и цели на месяц.
                    </p>
                    <p>
                        Выделите ключевые цели – сфокусируйтесь на глобальных задачах: завершение курсовой работы, сдача экзаменов.
                        <br />
                        Пример: "Подготовиться к экзамену по физике", "Пройти курс по программированию."
                    </p>
                    <p>
                        Разделите задачи на недели:
                        <br />
                        Установите сроки выполнения каждого этапа.
                        <br />
                        Пример: "Неделя 1: Прочитать главы 1–3, Неделя 2: Повторить лекции."
                    </p>
                    <p>
                        Синхронизируйте с долгосрочными целями:
                        <br />
                        Убедитесь, что задачи месяца продвигают вас к большим целям (например, сдать экзамен с высоким баллом).
                    </p>
                    <p>
                        Рекомендации:
                        <br />
                        В конце каждого месяца подводите итоги: что было выполнено, какие задачи требуют переноса.
                    </p>
                    <p>
                        Пример ежемесячного плана:
                    </p>
                    <ul className="styled-list">
                        <li>Первая неделя: Повторение тем для экзамена по математике.</li>
                        <li>Вторая неделя: Сдача курсовой работы.</li>
                        <li>Третья неделя: Решение пробных тестов.</li>
                        <li>Четвёртая неделя: Подготовка к экзамену по физике.</li>
                    </ul>

                    <h3>5. Советы для эффективного планирования</h3>
                    <p className="important-text">
                        Реалистичность: Не перегружайте планы задачами.
                    </p>
                    <p>
                        Гибкость: Оставляйте время для непредвиденных обстоятельств.
                    </p>
                    <p>
                        Рефлексия: Ежедневно или еженедельно анализируйте, что было выполнено, а что нет.
                    </p>
                    <p>
                        Делегирование: Если возможно, делегируйте менее важные задачи.
                    </p>
                    <p className="important-text">
                        Ежедневное, еженедельное и ежемесячное планирование — это мощный инструмент для управления временем. Правильно составленный план помогает студентам организовать свою учебу, избежать перегрузок и достигать целей, сохраняя при этом баланс между учёбой и личной жизнью.
                    </p>
                </div>
                <TopicNavigation prevTopic="/courses/smart" nextTopic="/courses/planing-instruments" />
                <Footer/>
            </div>
        </div>
    );
}