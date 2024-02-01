
import './App.css'
import AddTodo from './components/AddTodo'
import Footer from './components/Footer/Footer'
import Todo from './components/Todo'

function App() {


  return (
    <div>
      <h1 className='font-bold'>Todos App</h1>
      <AddTodo/>
      <Todo/>
      <Footer/>
    </div>
  )
}

export default App
