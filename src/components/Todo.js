import PropTypes from "prop-types";

function Todo({ id, title, content, state, setTodos, setDones }) {
  const handleDelete = () => {
    if (state === "working") {
      setTodos((prev) => {
        let temp = [...prev];
        const idx = temp.findIndex((v) => v.id === id);
        temp.splice(idx, 1);
        return temp;
      });
    } else {
      setDones((prev) => {
        let temp = [...prev];
        const idx = temp.indexOf((v) => v.id === id);
        temp.splice(idx, 1);
        return temp;
      });
    }
  };

  const handleStateChange = () => {
    if (state === "working") {
      setTodos((prev) => {
        let temp = [...prev];
        const idx = temp.findIndex((v) => v.id === id);
        temp.splice(idx, 1);
        return temp;
      });

      setDones((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: title,
          content: content,
          state: "done",
        },
      ]);
    } else {
      setDones((prev) => {
        let temp = [...prev];
        const idx = temp.findIndex((v) => v.id === id);
        temp.splice(idx, 1);
        return temp;
      });

      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: title,
          content: content,
          state: "working",
        },
      ]);
    }
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="delete_btn" onClick={handleDelete}>
        삭제하기
      </button>
      <button className="state_btn" onClick={handleStateChange}>
        {state === "done" ? "취소" : "완료"}
      </button>
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
  setDones: PropTypes.func.isRequired,
};

export default Todo;
