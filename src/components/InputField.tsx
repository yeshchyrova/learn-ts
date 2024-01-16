import { FormEvent, useRef } from "react";
import "./styles.css";

interface IProps {
  todo: string;
  setTodo: (value: string) => void;
  handleAdd: (e: FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
