
import React from "react";
import CreateUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
