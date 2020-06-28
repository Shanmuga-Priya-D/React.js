import React ,{ useState }from "react";

function App() {

  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");

function handleChange1(event){
  console.log(event.target.value);
  setFname(event.target.value);
  
}
function handleChange2(event){
  console.log(event.target.value);
  setLname(event.target.value);
}

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input onChange={handleChange1} name="fName" placeholder="First Name" />
        <input onChange={handleChange2}name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
