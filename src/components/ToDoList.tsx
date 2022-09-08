import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDo, TodoActionTypes } from "../store/types/todo";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Star } from "./Star";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 5px lightslategray;
  height: fit-content;
`;

const Todo = styled.div<{ checked: boolean }>`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 15%);
  background-color: ${({ checked }) =>
    checked ? "rgba(0, 0, 100, 10%)" : "rgba(250, 255, 10, 1%)"};
  border-radius: 5px;
  border: 2px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  transform: translateY(3px);
  font-size: 30px;
  > div {
    cursor: pointer;
  }
  display: flex;
  gap: 4px;
`;

const Wrapper = styled.div`
  width: 85%;
  gap: 25px;
  display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  color: rgba(0, 0, 0, 60%);
  width: 100%;
  transition: 0.5s;
  :disabled {
    border-color: transparent;
    background-color: transparent;
  }

  :enabled {
    padding: 5px 10px;
    border: solid lightgray 2px;
    border-radius: 6px;
    text-overflow: ellipsis;
  }
  outline: transparent;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const ToDoList: React.FunctionComponent = () => {
  const state = useSelector((state: ToDo[]) => state);
  const dispatch = useDispatch();
  const valueRef = useRef("");
  const removeTodo = (id: string) => {
    dispatch({
      type: TodoActionTypes.REMOVE_TODO,
      payload: id,
    });
  };

  const markFavourite = (id: string) => {
    dispatch({
      type: TodoActionTypes.MARK_FAVOURITE,
      payload: id,
    });
  };

  const markCompleted = (id: string) => {
    dispatch({
      type: TodoActionTypes.MARK_COMPLETED,
      payload: id,
    });
  };

  const onEdit = (id: string) => {
    dispatch({
      type: TodoActionTypes.ON_EDIT,
      payload: id,
    });
  };

  const onEnterPress = (id: string, value: string) => {
    dispatch({
      type: TodoActionTypes.UPDATE_TODO,
      payload: { id, value },
    });
  };

  return (
    <>
      {!!state.length && (
        <Container>
          {state.map((todo) => (
            <Todo checked={todo.checked} key={todo.id}>
              <Wrapper>
                <Checkbox
                  onClick={() => {
                    markCompleted(todo.id);
                  }}
                />
                <TextInput
                  disabled={!todo.editing}
                  defaultValue={todo.value}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onEnterPress(todo.id, valueRef.current);
                    }
                  }}
                  onChange={(e) => (valueRef.current = e.target.value)}
                />
              </Wrapper>

              <Buttons>
                <Star
                  onClick={() => {
                    markFavourite(todo.id);
                  }}
                />
                <div onClick={() => onEdit(todo.id)}>
                  <BiEdit />
                </div>
                <div
                  onClick={() => {
                    removeTodo(todo.id);
                  }}
                >
                  <AiOutlineClose />
                </div>
              </Buttons>
            </Todo>
          ))}
        </Container>
      )}
    </>
  );
};
