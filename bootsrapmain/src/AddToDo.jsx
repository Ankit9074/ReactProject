 import "./App.css"
 function AddToDo(){

  return (
    <center>
      <div className="container">
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder='Enter Your Choise' />
      </div>
      <div className="col-2">
        <input type="date"/>
      </div>
      <div className="col-2">
        <button type='button' className='btn btn-success'>Add</button>
      </div>
    </div>
</div>
 </center>
  )
}

export default AddToDo;
