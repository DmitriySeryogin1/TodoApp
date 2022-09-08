export interface ToDo {
  id: string;
  checked: boolean;
  value: string;
  completed: boolean;
  favourite: boolean;
  editing: boolean;
}

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  MARK_COMPLETED = "MARK_COMPLETED",
  MARK_FAVOURITE = "MARK_FAVOURITE",
  ON_EDIT = "ON_EDIT",
}

interface AddToDoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: ToDo;
}
interface RemoveToDoAction {
  type: TodoActionTypes.REMOVE_TODO;
  payload: string;
}
interface UpdateToDoAction {
  type: TodoActionTypes.UPDATE_TODO;
  payload: { id: string; value: string };
}
interface MarkCompletedToDoAction {
  type: TodoActionTypes.MARK_COMPLETED;
  payload: string;
}
interface MarkFavouriteToDoAction {
  type: TodoActionTypes.MARK_FAVOURITE;
  payload: string;
}
interface OnEditToDoAction {
  type: TodoActionTypes.ON_EDIT;
  payload: string;
}

export type TodoAction =
  | AddToDoAction
  | RemoveToDoAction
  | UpdateToDoAction
  | MarkCompletedToDoAction
  | MarkFavouriteToDoAction
  | OnEditToDoAction;
