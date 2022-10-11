import './App.scss'
import { useContext } from 'react';
import { AppContext } from './AppContext';

function App() {
  const { siteName, unstructuredSpanishVerbs } = useContext(AppContext);
  return (
    <div className="App">
      <h1>{siteName}</h1>
      <p>unstructured spanish verbs: {unstructuredSpanishVerbs.length}</p>
    </div>
  )
}

export default App
