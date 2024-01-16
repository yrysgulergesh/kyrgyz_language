import React from 'react';
import LessonItem from '../components/LessonItem';

export default function LessonsList() {
  const lessons = [
    { id: 1, title: 'Урок 1', description: 'Описание урока 1' },
    { id: 2, title: 'Урок 2', description: 'Описание урока 2' },
    // Другие уроки
  ];

  return (
    <div>
      <h1>Список уроков</h1>
      {lessons.map((lesson) => (
        <LessonItem key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
