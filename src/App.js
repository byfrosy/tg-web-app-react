import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";


function App() {

  const userinfo = window.Telegram.WebApp.initDataUnsafe?.user;

  const {onClose, tg, user} = useTelegram();

  useEffect ( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">

      <Header />

      <span className='userinfo'>{userinfo}</span>

      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
