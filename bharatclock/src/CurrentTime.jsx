let CurrentTime = ()=>{
  let time = new Date();
  return <p className="para"> This is  the Current Time is {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
   
  
  
}
export default CurrentTime;