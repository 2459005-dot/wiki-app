import './App.css'
import TimerDisplay from './components/TimerDisplay'
import Timer from './components/Timer'
import Button from './components/Button'

function App() {

  return (
    <div className='app-container'>
      <h1>타이머 앱</h1>
      <Timer />
    </div>
  )
}

export default App
