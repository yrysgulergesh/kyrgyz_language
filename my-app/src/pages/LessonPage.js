import React from 'react';
import { Link } from 'react-router-dom';
// Убедитесь, что Button импортирован, если это отдельный компонент
// import Button from 'путь_к_компоненту_Button';

export default function LessonPage({ lesson }) {
  const { title, content } = lesson;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link to={`/lesson/${lesson.id}/test`}>
        {/* Используйте <button> или ваш компонент Button */}
        <button>Перейти к тесту</button>  
      </Link>
    </div>
  );
}
