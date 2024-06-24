import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";


function App() {

  const {user, onClose, tg} = useTelegram();

  useEffect ( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">

      <Header />
      <img src={user?.photo_url} alt="Profile"/>

      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
