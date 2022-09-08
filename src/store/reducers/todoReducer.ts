import { TodoActionTypes, TodoAction, ToDo } from "../types/todo";

const defaultState: ToDo[] = [];

export const todoReducer = (
  state: ToDo[] = defaultState,
  action: TodoAction
): Array<ToDo> => {
  if (action.type === TodoActionTypes.ADD_TODO) {
    return [
      ...state.filter((v) => !v.checked && v.favourite),
      ...state.filter((v) => !v.checked && !v.favourite),
      action.payload,
      ...state.filter((v) => v.checked && v.favourite),
      ...state.filter((v) => !v.favourite && v.checked),
    ];
  }

  if (action.type === TodoActionTypes.REMOVE_TODO) {
    return [...state.filter((v) => v.id !== action.payload)];
  }

  if (action.type === TodoActionTypes.MARK_FAVOURITE) {
    const arr = [...state].map((v) => {
      return { ...v };
    });
    const elem = arr.find((v) => v.id === action.payload);
    elem!.favourite = !elem!.favourite;

    return [
      ...arr.filter((v) => !v.checked && v.favourite),
      ...arr.filter((v) => !v.checked && !v.favourite),
      ...arr.filter((v) => v.checked && v.favourite),
      ...arr.filter((v) => !v.favourite && v.checked),
    ];
  }

  if (action.type === TodoActionTypes.MARK_COMPLETED) {
    const arr = [...state].map((v) => {
      return { ...v };
    });
    const elem = arr.find((v) => v.id === action.payload);
    elem!.checked = !elem!.checked;

    return [
      ...arr.filter((v) => !v.checked && v.favourite),
      ...arr.filter((v) => !v.favourite && !v.checked),
      ...arr.filter((v) => v.favourite && v.checked),
      ...arr.filter((v) => v.checked && !v.favourite),
    ];
  }

  if (action.type === TodoActionTypes.ON_EDIT) {
    const arr = [...state].map((v) => {
      return { ...v };
    });
    const elem = arr.find((v) => v.id === action.payload);
    elem!.editing = true;
    return arr;
  }

  if (action.type === TodoActionTypes.UPDATE_TODO) {
    const arr = [...state].map((v) => {
      return { ...v };
    });
    const elem = arr.find((v) => v.id === action.payload.id);
    elem!.value = action.payload.value;
    elem!.editing = false;
    return arr;
  }

  return state;
};
