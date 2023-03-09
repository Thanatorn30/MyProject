import TodoContainer from "./Component/TodoContainer";
import TodoForm from "./Component/ToDoForm";

    function App() {
      return (
        <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
          <TodoForm/>
          <TodoContainer/>
        </div>
      );
    }
export default App;
