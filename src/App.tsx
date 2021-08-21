import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "use-http";
import { Button } from "react-bootstrap";
import Header from "./Components/Header";
import UserList from "./Components/UserList";

function App() {
  const options = {};

  const {
    loading,
    error,
    data = [],
  } = useFetch("https://jsonplaceholder.typicode.com/users", options, []);

  return (
    <>
      <Header />
      <UserList />
    </>
  );
}

export default App;
