import "./style.css";
const Item = (props) => {
  const handleRemoveClick = () => {
    props.onRemove(props.task.id);
  };

  const handleCheckboxClick = () => {
    props.onChangeCheckbox(props.task.id);
  };

  const handleTitleClick = () => {
    props.onSelect(props.task.id);
  };

  return (
    <>
      <div className="col-4">
        <div className="task-wrapper">
          <div className="task-heading" onClick={handleTitleClick}>
            {props.task.titleText}
          </div>

          <div className="task-description">{props.task.text}</div>
          <hr />

          <label>
            <input
              type="checkbox"
              onChange={handleCheckboxClick}
              checked={props.task.isChecked}
            />
            <span className="ms-2">Done?</span>
          </label>
          <hr />

          <button
            type="button"
            className="btn btn-danger delete-btn"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
