import React, { useState, useEffect, useRef } from 'react';
import '../globals.css'; // Импортируем глобальные стили
import './ToDoList.css'; // Импортируем новые стили

const ToDoList = () => {
    const [tasks, setTasks] = useState({});
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState(1);
    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState('');
    const [showForm, setShowForm] = useState({});

    const listsRef = useRef(lists);
    const tasksRef = useRef(tasks);

    useEffect(() => {
        const storedLists = JSON.parse(localStorage.getItem('lists')) || [];
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {};

        console.log('Loaded lists from localStorage:', storedLists);
        console.log('Loaded tasks from localStorage:', storedTasks);

        setLists(storedLists);
        setTasks(storedTasks);

        storedLists.forEach(list => {
            setShowForm(prev => ({ ...prev, [list.id]: false }));
        });
    }, []);

    useEffect(() => {
        if (listsRef.current !== lists) {
            console.log('Saving lists to localStorage:', lists);
            localStorage.setItem('lists', JSON.stringify(lists));
            listsRef.current = lists;
        }
    }, [lists]);

    useEffect(() => {
        if (tasksRef.current !== tasks) {
            console.log('Saving tasks to localStorage:', tasks);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            tasksRef.current = tasks;
        }
    }, [tasks]);

    const addList = () => {
        const newList = { id: Date.now(), name: newListName };
        setLists(prevLists => [...prevLists, newList]);
        setNewListName('');
    };

    const addTask = (listId) => {
        const newTaskObj = { id: Date.now(), task: newTask, priority, completed: false };
        setTasks(prevTasks => ({
            ...prevTasks,
            [listId]: [...(prevTasks[listId] || []), newTaskObj]
        }));
        setNewTask('');
        setShowForm(prev => ({ ...prev, [listId]: false }));
    };

    const toggleTask = (listId, id, completed) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [listId]: prevTasks[listId].map(task =>
                task.id === id ? { ...task, completed: !completed } : task
            )
        }));
    };

    const deleteTask = (listId, id) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [listId]: prevTasks[listId].filter(task => task.id !== id)
        }));
    };

    const deleteList = (listId) => {
        setLists(prevLists => prevLists.filter(list => list.id !== listId));
        setTasks(prevTasks => {
            const { [listId]: _, ...rest } = prevTasks;
            return rest;
        });
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 1:
                return 'green';
            case 2:
                return 'orange';
            case 3:
                return 'red';
            default:
                return 'black';
        }
    };

    return (
        <div className="container">
            <div className="todo-form">
                <input
                    type="text"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="Новый список"
                    className="todo-input"
                />
                <button onClick={addList} className="todo-button">Добавить список</button>
            </div>
            <div className="todo-lists">
                {lists.map(list => (
                    <div key={list.id} className="todo-list-box">
                        <h2>{list.name} </h2>
                        <button onClick={() => setShowForm(prev => ({...prev, [list.id]: !prev[list.id]}))}
                                className="todo-button">
                            {showForm[list.id] ? 'Скрыть форму' : 'Добавить задачу'}
                        </button>
                        <button onClick={() => deleteList(list.id)} className="todo-delete-button">Удалить список
                        </button>

                        {showForm[list.id] && (
                            <div className="todo-form">
                                <input
                                    type="text"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    placeholder="Новая задача"
                                    className="todo-input"
                                />
                                <select value={priority} onChange={(e) => setPriority(e.target.value)}
                                        className="todo-select">
                                    <option value={1}>Низкий</option>
                                    <option value={2}>Средний</option>
                                    <option value={3}>Высокий</option>
                                </select>
                                <button onClick={() => addTask(list.id)} className="todo-button">Добавить задачу
                                </button>
                            </div>
                        )}
                        <ul className="todo-list">
                            {tasks[list.id]?.map(task => (
                                <li key={task.id} className="todo-item"
                                    style={{borderLeft: `5px solid ${getPriorityColor(task.priority)}`}}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(list.id, task.id, task.completed)}
                                        className="todo-checkbox"
                                    />
                                    <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
                                        {task.task}
                                    </span>
                                    <button onClick={() => deleteTask(list.id, task.id)}
                                            className="todo-delete-button">Удалить
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;