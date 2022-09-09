import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

const Task = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const data = JSON.parse(localStorage.getItem("todoListData")).find((el) => {
    return el.id === params.taskId;
  });

  if (!data) {
    return <p>Task not found</p>;
  }

  return (
    <div className="container todo-container">
      <h3>Task heading</h3>
      <p class="heading-text">{data.titleText}</p>

      <h4>Task description</h4>
      <p class="description-text">{data.text}</p>

      <button className="btn btn-primary back-button" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default Task;
