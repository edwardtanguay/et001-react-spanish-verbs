import './App.scss'
import { useContext } from 'react';
import { AppContext } from './AppContext';

function App() {
  const { siteName } = useContext(AppContext);
  return (
    <div className="App">
      <h1>{siteName}</h1>
      <p>testing</p>
    </div>
  )
}

export default App
