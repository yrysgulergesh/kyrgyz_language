import React from 'react';
import { Link } from 'react-router-dom';
// Если Button - кастомный компонент, импортируйте его отсюда:
// import Button from 'путь_к_файлу_Button';

export default function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Здесь вы можете изучить кыргызский язык</p>
      
      <Link to="/lessons">
        {/* Используйте либо кастомный компонент Button, либо стандартный HTML-элемент button */}
        {/* <Button text="Перейти к урокам"/> */}
        <button>Перейти к урокам</button>
      </Link>
    </div>
  );
}
