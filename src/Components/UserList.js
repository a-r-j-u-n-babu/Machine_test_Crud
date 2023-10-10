import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../Datatable/DataTable";
import { Input } from "reactstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://reqres.in/api/users?page=1&per_page=10`
        );
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchEmail(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div>
          <Input
        style={{width:"25%"}}
        className="m-4"
        type="text"
        placeholder="Search by email"
        value={searchEmail}
        onChange={handleSearch}
      />
      <DataTable users={filteredUsers} />
    </div>
  );
};

export default UserList;
