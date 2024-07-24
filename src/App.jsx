import './App.css'
import Counter from './components/counter/Counter'

function App() {

  return (
    <div>
      <h1>incrementa de 3 en 3</h1>
      <Counter counter={3} step={3} />
    </div>
  )
}

export default App
