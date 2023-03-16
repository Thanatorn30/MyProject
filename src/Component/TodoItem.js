import axios from "axios";
import { useState } from "react";
import TodoForm from "./ToDoForm";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  function changeStatus() {
    axios
      .put(`http://localhost:8080/todos/${props.todo.id}`, {
        title: props.todo.title,
        completed: !props.todo.completed,
      })
      .then((res) => {
        props.fetchData();
      })
      .catch(() => {
        "Error";
      });
  }

  const deleteitem = async () => {
    try {
      await axios.delete(`http://localhost:8080/todos/${props.todo.id}`);
      props.fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  function openForm() {
    setIsEditing(true);
  }

  function closeForm(data) {
    return setIsEditing(data);
  }

  return (
    <>
      <li
        className={`list-group-item p-3 callout-${
          props.completed ? "success" : "warning"
        }`}
      >
        {isEditing ? (
          <TodoForm
            closeForm={closeForm}
            isEditing={isEditing}
            title={props.title}
            todo={props.todo}
            completed={props.completed}
            fetchData={props.fetchData}
          />
        ) : (
          <div className="d-flex align-items-center">
            <span
              className="flex-fill"
              role="button"
              onClick={() => {
                openForm();
              }}
            >
              {props.title}
            </span>
            <div className="btn-group">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  changeStatus();
                }}
              >
                <i
                  className={`fa-solid fa-toggle-${
                    props.completed ? "on" : "off"
                  }`}
                />
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  deleteitem();
                }}
              >
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
export default TodoItem;
