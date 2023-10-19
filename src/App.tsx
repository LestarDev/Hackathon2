import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameScreen from './app/pages/GameScreen/GameScreen'
import { Provider } from 'react-redux'
import { store } from "./app/shared/store"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  )
}

export default App
