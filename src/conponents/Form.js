import { useState, useContext } from "react";
import { Form, FormGroup, Input, InputGroup, Button } from "reactstrap";
import { v4 } from "uuid";
import { ADD_TODO } from "./action.types";
import Context from "./Context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(Context);

  const handleTodos = (e) => {
    e.preventDefault();
    if (todo === "") return alert("Enter a Todo");

    const todoo = {
      todo,
      id: v4()
    };
    dispatch({
      type: ADD_TODO,
      payload: todoo
    });

    setTodo("");
  };

  return (
    <Form onSubmit={handleTodos} className="input">
      <FormGroup>
        <InputGroup>
          <Input
            className="input-box"
            type="text"
            id="todo"
            name="todo"
            placeholder="Enter a TODO"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button color="warning">ADD</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default TodoForm;
