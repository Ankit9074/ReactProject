import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return <center className='todo-container'>
    <h1>Todo App</h1>
    <div className="container text-container">
      <div className="row">
        <div className="col-5"> 
        <input type="text"  placeholder='Enter Your Name' />
        </div>
        <div className="col-2">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type='button' className='btn btn-success'>Add</button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-5">Buy Milk</div>
        <div className="col-2">12/08/1999</div>
        <div className="col-2"><button type='button' className='btn btn-danger'>Delete</button></div>
      </div>


      <div className="row">
        <div className="col-5">Cow-ghee</div>
        <div className="col-2">12/08/1999</div>
        <div className="col-2"><button type='button' className='btn btn-danger'>Delete</button></div>
      </div>


      <div className="row">
        <div className="col-5">Shop</div>
        <div className="col-2">12/08/1999</div>
        <div className="col-2"><button type='button' className='btn btn-danger'>Delete</button></div>
      </div>
      
    </div>
    </center>
}
export default App;