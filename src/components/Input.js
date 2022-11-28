import PropTypes from "prop-types";

function Input({ title, content, todos, setTitle, setContent, setTodos }) {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAddTodo = () => {
    if (title.length !== 0 && content.length !== 0) {
      const todo = {
        id: todos.length + 1,
        title: title,
        content: content,
        state: "working",
      };

      setTodos([...todos, todo]);

      setTitle("");
      setContent("");
      return;
    }

    alert("내용을 모두 작성해주세요");
  };

  return (
    <div className="input">
      <div>
        <label>제목</label>
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="제목을 입력해주세요"
        />
        <label>내용</label>
        <input
          value={content}
          onChange={handleContentChange}
          type="text"
          placeholder="내용을 입력해주세요"
        />
      </div>
      <button onClick={handleAddTodo}>추가하기</button>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Input;
