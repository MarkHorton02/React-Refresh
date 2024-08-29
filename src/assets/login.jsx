import { useState } from "react";
import writeCookie from "../utils/writeCookie";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //SUBMIT HANDLER
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(userid, email, password);
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const output = await response.json();
    console.log(response);
    console.log(output.token);
    writeCookie("jwt_token", output.token, 14);
  };

  return (
    <div>
      <hr></hr>
      <h1>Login User</h1>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <br></br>
        <input type="text" name="username" onChange={(event) => {setUsername(event.target.value)}}/>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="text" name="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <br></br>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      <hr></hr>
    </div>
  );
};

export default Login;