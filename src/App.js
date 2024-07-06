import React, { useState, useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';
import LoadingScreen from './LoadingScreen';

function App() {
  const { onClose, tg } = useTelegram();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.ready();

    setLoading(false);

  }, [tg]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Header />
      <span>Матчи на сегодня</span>
      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
