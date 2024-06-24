import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/header/header";


function App() {

  const {onClose, tg, user} = useTelegram();

  useEffect ( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">

      <Header />

      <span>{user}</span>

      {/* <button onClick={onClose}>Закрыть</button> */}
    </div>
  );
}

export default App;
