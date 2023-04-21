import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Context from "./conponents/Context";
import Reducer from "./conponents/Reducer";
import TodoForm from "./conponents/Form";
import DisplayTodo from "./conponents/DisplayTodo";
import "./styles.css";

const App = () => {
  const [todos, dispatch] = useReducer(Reducer, []);
  return (
    <div className="container">
      <Context.Provider
        value={{
          todos,
          dispatch
        }}
      >
        <Container fluid>
          <DisplayTodo />
          <TodoForm />
        </Container>
      </Context.Provider>
    </div>
  );
};
export default App;
