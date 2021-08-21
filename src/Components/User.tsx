import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { EmitFlags } from "typescript";

export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  address: any;
}

export interface IUserProps {
  user: IUser;
}

const User: React.FC<IUserProps> = ({ user }: IUserProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow}>
        <Card.Title>Username: {user.username}</Card.Title>
        <Card.Body>
          <p>Emal: {user.email}</p>
          <p>Name: {user.name}</p>
        </Card.Body>
        <Button>Go to prifle</Button>
      </Card>
      <br></br>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Username: {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Emal: {user.email}</p>
          <p>Name: {user.name}</p>
          <h3>Address</h3>
          <p>Street: {user.address.street}</p>
          <p>City: {user.address.city}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
