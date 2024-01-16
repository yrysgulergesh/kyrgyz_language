
import React from 'react';
import LessonItem from '../components/LessonItem';

// Остальная часть кода остается без изменений


export default function LessonsList() {
  // Предполагаем, что это ваш массив уроков, если вы загружаете их из API, здесь будет другая логика
  const lessons = [
    { id: 1, title: "Урок 1", description: "Описание урока 1" },
    { id: 2, title: "Урок 2", description: "Описание урока 2" },
    // ... другие уроки
  ];

  return (
    <div>
      <h1>Список уроков</h1>
      {lessons.map(lesson => (
        <LessonItem key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
