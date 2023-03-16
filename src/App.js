import {useState,useEffect} from 'react'
import axios from 'axios'
import TodoForm from "./Component/ToDoForm";
import TodoContainer from "./Component/TodoContainer";

    function App() {
      const [todo,setTodo] = useState([]);
      const [input,setInput] = useState()
      
      
      // Fetch รอบแรก
      useEffect(()=>{
        fetchData();
      },[input])


       // Fetch Data
      function fetchData(queryString =''){
        axios
        .get("http://localhost:8080/todos"+queryString)
        .then(res=>{
          setTodo(res.data.todos)
        })
        .catch(err=>{console.log("Error");})
      }

      // Update Item
      function updateTodoitem(data){
         const cloneData = Object.assign(todo,data)
         return setInput(cloneData)
      };


      // Edit Content
      function editContent(editing){
        return console.log(editing)
      }
      
      

      return (
        <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
          <TodoForm updateTodoitem={updateTodoitem} fetchData={fetchData} todo={todo}/>
          <TodoContainer todo={todo} fetchData={fetchData} editContent={editContent}/>
        </div>
      );
    }
export default App;


