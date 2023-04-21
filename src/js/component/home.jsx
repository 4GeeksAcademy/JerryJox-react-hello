import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// 1. declracion de estados
	const [email, setEmail]=useState("")
	const [password, setPassword]=useState("")
	const [todoList, setTodoList]=useState([])



	function handlePassword(event) {

		setPassword(event.target.value);
	}

	function enviarDatos(event) {
		// ejecutar el metodo preventDefault para detener el complortamiento predeterminado del formulario
		event.preventDefault()
		alert(email,password);
		setEmail("")
		setPassword("")
	}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<form onSubmit={enviarDatos}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
	{/* agregar el evento onChange y vincularlo a una funcion */}
    {/* <input type="email" onChange={function(event) {console.log(event.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/> */}
	<input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={handlePassword}  className="form-control" id="exampleInputPassword1" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		</div>
	);
};

export default Home;
