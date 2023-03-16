import axios from "axios";
import { useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  
// Create Form
  function handleSubmitForm(e) {
    e.preventDefault();
    
      axios
        .post("http://localhost:8080/todos", { title, completed: false })
        .then((res) => {
          props.updateTodoitem(res.data);
          setTitle("");
        })
        .catch((err) => console.log("Error"));
    
  }

  // EditForm************CC12 React อาจารย์เอิร์ธ 23-08-2022 (ช่วงบ่าย) Clip22 2.33น.
  function editForm (e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/todos/${props.todo.id}`, { title, completed: props.completed })
    .then(()=>{props.fetchData()})
    .catch(()=>{console.log("Error");})
    props.closeForm(false);
  }
  // ********************

  function handleCloseForm() {
    if (props.isEditing) {
      props.closeForm(false);
    } else {
      setTitle("");
    }
  }

  

  return (
    <div className="my-4">
      <form onSubmit={props.isEditing? editForm : handleSubmitForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              handleCloseForm();
            }}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoForm;
