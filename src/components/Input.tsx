import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../store/types/todo";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const Input = styled.input`
  :focus {
    outline: none !important;
  }
  color: rgba(0, 0, 0, 60%);
  padding: 6px 15px;
  width: 100%;
  border: solid lightgray 2px;
  border-radius: 4px;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  font-weight: 550;
  font-size: 15px;
  cursor: pointer;
  border: solid transparent 2px;
  color: white;
  background-color: rgba(0, 160, 255, 80%);
  width: 25%;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InputSection: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const addTodo = () => {
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: {
        id: uuidv4(),
        value: value,
        checked: false,
        favourite: false,
        editing: false,
      },
    });
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          type={"text"}
          placeholder={"Short todo description"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </InputWrapper>
      <Button
        onClick={() => {
          if (value) {
            addTodo();
            setValue("");
          }
        }}
      >
        Add todo
      </Button>
    </Container>
  );
};
