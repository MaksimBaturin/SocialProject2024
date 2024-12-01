"use client";
import React, { useState } from 'react';

export function TestComponent({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerClick = (answer) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = answer;
        setSelectedAnswers(newSelectedAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartTest = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setShowResults(false);
    };

    const renderQuestion = () => {
        const question = questions[currentQuestionIndex];
        return (
            <div className="test-question">
                <div className="question-info">
                    <span>Вопрос {currentQuestionIndex + 1} из {questions.length}</span>
                </div>
                <h3>{question.question}</h3>
                <div className="options">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(option)}
                            className={selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderResults = () => {
        const correctAnswersCount = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
        return (
            <div className="test-results">
                <h3>Результаты теста</h3>
                <p>Вы ответили правильно на {correctAnswersCount} из {questions.length} вопросов.</p>
                <button onClick={restartTest}>Пройти тест заново</button>
                <div className="correct-answers">
                    <h4>Правильные ответы:</h4>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index}>
                                <div className="question-info">
                                    <span>Вопрос {index + 1} из {questions.length}</span>
                                </div>
                                <h3>{question.question}</h3>
                                <div className="options">
                                    {question.options.map((option, optionIndex) => (
                                        <button
                                            key={optionIndex}
                                            className={`
                                                ${selectedAnswers[index] === option ? 'selected' : ''}
                                                ${option === question.correctAnswer ? 'correct' : ''}
                                                ${selectedAnswers[index] === option && selectedAnswers[index] !== question.correctAnswer ? 'incorrect' : ''}
                                            `}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="test-component">
            {showResults ? renderResults() : renderQuestion()}
        </div>
    );
}