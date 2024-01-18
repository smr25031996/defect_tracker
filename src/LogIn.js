import React, { useState } from "react";
import "./login.css";
import ViewDefects from "./View_Defects";

function LogIn() {
  var users = [
    { empId: 11, name: "shubham", password: "shubham@123", role: "developer" },
    { empId: 12, name: "saurabh", designation: "saurabh@123", role: "tester" },
  ];
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    // Find the user based on entered credentials
    const user = users.find(
      (u) => u.name === username && u.password === password
    );

    if (user) {
      // Notify the parent component about the successful login
      alert("Welcome");
      setLoggedIn(true);
      console.log(isLoggedIn);
    } else {
      alert("Invalid credentials");
      setLoggedIn(false);
      console.log(isLoggedIn)


    }
  };
if(isLoggedIn){
  return <ViewDefects/>

}
  return (
    <React.Fragment>
     
      <h4>Login</h4>
      <form onSubmit={handleLogIn} >
        UserName:
        <input
          type="text"
          placeholder="Enter UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        Password :
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit"className="but">Sign In</button>
      </form>
    </React.Fragment>
  );
}

export default LogIn;
