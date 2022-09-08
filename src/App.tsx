import React from "react";
import { ToDoList } from "./components";
import { InputSection } from "./components";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 5%);
  box-shadow: 0px 1px 5px 2px lightslategray;
  border-radius: 20px;
  height: 80vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  gap: 20px;
  padding: 30px;
`;

function App() {
  return (
    <Container>
      <InputSection />
      <ToDoList />
    </Container>
  );
}

export default App;
