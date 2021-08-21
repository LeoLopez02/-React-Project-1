import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "./Components/Header";
import UserList from "./Components/UserList";

function App() {
  return (
    <>
      <Header />
      <UserList />
    </>
  );
}

export default App;
