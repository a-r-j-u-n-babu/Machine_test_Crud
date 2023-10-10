
import React from "react";
import CreateUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div>
        <h2 style={{textAlign:"center"}}>User Listing</h2>
      </div>
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
