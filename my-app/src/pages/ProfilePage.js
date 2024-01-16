import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm'; // Убедитесь, что ProfileForm корректно импортирован

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Здесь должен быть код для загрузки данных пользователя
    // Например, запрос к API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Ошибка загрузки данных пользователя:', error));
  }, []);

  // Проверка на то, что данные пользователя ещё не загружены
  if (!user) {
    return <div>Загрузка данных пользователя...</div>;
  }

  return (
    <div>
      <h1>Личный кабинет</h1>
      <ProfileForm user={user} />
    </div>
  );
}
