import Todo from "./Todo";
import PropTypes from "prop-types";

function TodoList({ type, todos, dones, setTodos, setDones }) {
  return (
    <div>
      {type === "todo" ? (
        todos.length !== 0 ? (
          todos.map((v) => (
            <Todo
              key={v.id}
              id={v.id}
              title={v.title}
              content={v.content}
              state={v.state}
              todos={todos}
              dones={dones}
              setTodos={setTodos}
              setDones={setDones}
            />
          ))
        ) : (
          <p>추가된 할 일이 없습니다.</p>
        )
      ) : dones.length !== 0 ? (
        dones.map((v) => (
          <Todo
            key={v.id}
            id={v.id}
            title={v.title}
            content={v.content}
            state={v.state}
            todos={todos}
            dones={dones}
            setTodos={setTodos}
            setDones={setDones}
          />
        ))
      ) : (
        <p>완료된 할 일이 없습니다.</p>
      )}
    </div>
  );
}

TodoList.propTypes = {
  type: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  dones: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setDones: PropTypes.func.isRequired,
};

export default TodoList;
