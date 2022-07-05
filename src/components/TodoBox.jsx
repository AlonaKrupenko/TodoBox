import React, { useState } from "react";
import _ from "lodash";
import Item from "./Item";

function TodoBox() {
  const [value, setValue] = useState("");
  const [todoList, updateTodoList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleRemove = (id) => {
    const actualTodoList = _.cloneDeep(todoList);
    const resultTodoList = actualTodoList.filter((el) => {
      return id !== el.id;
    });
    updateTodoList(resultTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = { id: _.uniqueId(), text: value };
    const actualTodoList = [element, ...todoList];
    setValue("");
    updateTodoList(actualTodoList);
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              onChange={handleChange}
              required=""
              className="form-control"
              placeholder="I am going..."
              value={value}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            add
          </button>
        </form>
      </div>
      <div>
        {todoList.map((el) => {
          return <Item task={el} onRemove={handleRemove} key={_.uniqueId()} />;
        })}
      </div>
    </div>
  );
}

export default TodoBox;
