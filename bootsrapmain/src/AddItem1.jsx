import "./App.css"
export default function AddItem() {
  let todoname = "Milk"
  let tododate = "12/10/1996"
  let todobutton = "Delete"
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {todoname}
        </div>
        <div className="col-2">
          {tododate}
        </div>
        <div className="col-2">
          <button type='button' className='btn btn-danger'>{todobutton}</button>
        </div>
      </div>
    </div>

  )
}