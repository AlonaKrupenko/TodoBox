const Item = (props) => {
  const handleRemoveClick = () => {
    props.onRemove(props.task.id);
  };

  return (
    <div className="row">
      <div className="col-auto">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleRemoveClick}
        >
          -
        </button>
      </div>
      <div className="col">{props.task.text}</div>
      <hr />
    </div>
  );
};

export default Item;
