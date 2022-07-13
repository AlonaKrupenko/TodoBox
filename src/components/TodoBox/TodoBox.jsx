import React, { useState } from "react";
import _ from "lodash";
import Item from "../Item/Item";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function TodoBox() {
  const [value, setValue] = useState("");
  const [todoList, updateTodoList] = useState(
    JSON.parse(localStorage.getItem("todoListData")) || []
  );
  const [titleValue, setTitleValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("todoListData", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const selectItem = (id) => {
    navigate("/todo-items/" + id);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleClearAll = () => {
    setValue("");
    setTitleValue("");
  };

  const handleRemoveAll = () => {
    updateTodoList([]);
  };

  const handleRemove = (id) => {
    const resultTodoList = todoList.filter((el) => {
      return id !== el.id;
    });
    updateTodoList(resultTodoList);
  };

  const handleCheckboxChange = (id) => {
    const currentTodoList = _.cloneDeep(todoList);

    const elToChange = currentTodoList.find((el) => {
      return id === el.id;
    });
    elToChange.isChecked = !elToChange.isChecked;
    updateTodoList(currentTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const element = {
      id: _.uniqueId(),
      text: value,
      titleText: titleValue,
      isChecked: false,
    };

    const actualTodoList = [element, ...todoList];
    setValue("");
    setTitleValue("");
    updateTodoList(actualTodoList);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">TODO LIST</h1>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Task title</label>
                <input
                  onChange={handleTitleChange}
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  required
                  value={titleValue}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Task body</label>
                <textarea
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="I am going..."
                  value={value}
                  style={{
                    height: "200px",
                  }}
                />
              </div>

              <div className="d-flex justify-content-between">
                <div className="">
                  <button type="submit" className="btn btn-primary m-1">
                    Create task
                  </button>
                  <button
                    type="reset"
                    className="btn btn-warning"
                    onClick={handleClearAll}
                  >
                    Clear
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleRemoveAll}
                >
                  Remove all tasks
                </button>
              </div>
            </form>
          </div>

          <div className="col-8">
            <div className="row">
              {todoList.map((el) => {
                return (
                  <Item
                    key={_.uniqueId()}
                    task={el}
                    onRemove={handleRemove}
                    onChangeCheckbox={handleCheckboxChange}
                    onSelect={selectItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoBox;
