import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import header from "./components/header/header";


function App() {

  const {onClose, tg} = useTelegram();

  useEffect ( () => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">

      <header />
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
