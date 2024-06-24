import React, { useState, useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';
import LoadingScreen from './LoadingScreen';

function App() {
  const { onClose, tg } = useTelegram();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Метод ready() сообщит приложению Telegram, что Mini App готов к отображению
    tg.ready();

    // Установим задержку перед отключением состояния загрузки
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // Задержка 2 секунды

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, [tg]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Header />
      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
