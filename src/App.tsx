import { useState, FormEvent } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { ITodo } from "./model";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo = {
        id: nanoid(),
        todo,
        isDone: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
