import { useContext } from "react";
import { REMOVE_TODO } from "./action.types";
import { ListGroup, ListGroupItem } from "reactstrap";
import Context from "./Context";
import { GrFormClose } from "react-icons/gr";
import "../styles.css";

const DisplayTodo = () => {
  const { todos, dispatch } = useContext(Context);

  return (
    <ListGroup className="m-5 items">
      {todos.map((t) => (
        <ListGroupItem key={t.id}>
          {t.todo}
          <span
            id="cross"
            onClick={() =>
              dispatch({
                type: REMOVE_TODO,
                payload: t.id
              })
            }
          >
            <GrFormClose />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default DisplayTodo;
