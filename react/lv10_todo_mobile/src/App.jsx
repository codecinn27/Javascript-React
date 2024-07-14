import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {

  return (
    <>
    {/* eliminate browser inconsistencies by applying a base layer of CSS */}
      <CssBaseline /> 
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
