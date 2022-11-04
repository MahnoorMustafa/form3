import { useState } from "react";
import "./App.css";

export default function App() {
  
  const[name,setName] = useState("");
  const[lname,setLname] = useState("");

  function handleName(event){
       setName(event.target.value);
  }
  function updateName(event){
    setLname(event.target.value);
}
  function updateText(){
    alert("Hello! \n"+ name +"_" + lname );
  }




  return (
    <div className="App">
      <h1>GREET FORM</h1>
      <input className="fname"
      onChange={handleName}
      type = "text"
      placeholder = "FIRST NAME"
      value = {name}
      />
      <input className="lname"
      onChange={updateName}
      type = "text"
      placeholder = "LAST NAME"
      value = {lname}
      />
      <button className="btn" onClick={updateText}> GREET ME </button>
      
    </div>
  );
}
