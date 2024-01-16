import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import { ITodo } from "../model";
import { useEffect, useRef, useState } from "react";

interface IProps {
  todo: ITodo;
  todoList: ITodo[];
  setTodoList: (value: ITodo[]) => void;
}

const Todo = ({ todo, todoList, setTodoList }: IProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: string) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setEdit(false);
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
  };

  return (
    <li key={todo.id}>
      <form
        className="todos__single"
        onSubmit={(e) => handleUpdateTodo(e, todo.id)}
      >
        {edit ? (
          <input
            value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--test"
          />
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}

        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <CiEdit />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <IoMdTrash />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <IoCheckmarkDoneCircleOutline />
          </span>
        </div>
      </form>
    </li>
  );
};

export default Todo;
