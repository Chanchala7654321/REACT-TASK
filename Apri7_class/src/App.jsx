import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {
  
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? 'dark' : 'light'} id='main'>
      <button className='darkBtn' onClick={toggleTheme} id = 'ChanBtn'>
        Switch {isDark ? 'Light' : 'Dark'} Mode
      </button>

      <Counter title="Player 1" />
      <Counter title="Player 2" />
    </div>
  )
}

export default App
