import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { Input } from "reactstrap";

function AddUser() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/users", user);
      alert("User created successfully.");
      setShowModal(false); // Close the modal after creating the user
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button className="m-3" style={{float:"right"}} onClick={handleOpenModal}>Create</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={user.first_name}
              onChange={handleChange}
            />
            <br />
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={user.last_name}
              onChange={handleChange}
            />
            <br />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <Button type="submit">Create</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddUser;
