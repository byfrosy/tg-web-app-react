import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";


function App() {

  const userinfo = window.Telegram.WebApp.initDataUnsafe?.user;

  const {user, onClose, tg} = useTelegram();

  useEffect ( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">

      <Header />
      <img src={user?.photo_url} alt="Profile" className="profile-image" />

      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
