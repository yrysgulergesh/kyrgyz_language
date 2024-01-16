import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonsList from './pages/LessonsList'; // Используйте существующий компонент
import LessonPage from './pages/LessonPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lessons" element={<LessonsList />} /> // Измененный маршрут
        <Route path="/lessons/:id" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
}
