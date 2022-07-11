const Item = (props) => {
  const handleRemoveClick = () => {
    props.onRemove(props.task.id);
  };
  const handleCheckboxClick = () => {
    props.onChangeCheckbox(props.task.id);
  };

  const itemStyle = {
    backgroundColor: "#ccc",
    borderRadius: "10px",
    boxShadow: "0 0 14px 1px rgba(0, 0, 0, .2)",
    padding: "20px",
    marginBottom: "20px",
  };

  const titileStyle = {
    fontWeight: "bold",
  };

  return (
    <>
      <div className="col-4">
        <div className="taskWrapper" style={itemStyle}>
          <div className="taskHeading" style={titileStyle}>
            {props.task.titleText}
          </div>
          <div className="taskDescription">{props.task.text}</div>
          <hr />

          <label>
            <input
              type="checkbox"
              onChange={handleCheckboxClick}
              checked={props.task.isChecked}
            />
            <span className="ms-2">Завершено ?</span>
          </label>
          <hr />

          <button
            type="button"
            className="btn btn-danger delete-btn"
            onClick={handleRemoveClick}
          >
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
