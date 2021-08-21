import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useFetch } from "use-http";
import User, { IUser } from "./User";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { get, post, response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com"
  );

  useEffect(() => {
    loadInitialUsers();
  }, []);

  async function loadInitialUsers() {
    const initialUsers = await get("/users");
    if (response.ok) setUsers(initialUsers);
  }
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      {error && "Error!"}
      {loading && "Loading..."}
      <>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </>
    </Container>
  );
};

export default UserList;
