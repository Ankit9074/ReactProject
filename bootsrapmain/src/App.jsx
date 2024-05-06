
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddToDo from './AddToDo';
import AddItem from './AddItem1';
import AddItem2 from './AddItem2';
function App() {
  return(
<center className='ToDo-Container'><h1>Todo List</h1>
      <AddToDo></AddToDo>
      <div className="item-container">  
      <AddItem></AddItem>
      <AddItem2></AddItem2>
      </div>
    
    </center>
    
  )

}
export default App;