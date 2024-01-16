import { ITodo } from "../model";
import Todo from "./Todo";

interface IProps {
  todoList: ITodo[];
  setTodoList: (value: ITodo[]) => void;
}

const TodoList = ({ todoList, setTodoList }: IProps) => {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
