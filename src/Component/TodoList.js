import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="list-group my-2">
      {props.todo.map((item) => {
        return (
          <TodoItem
            title={item.title}
            completed={item.completed}
            key={item.id}
            todo={item}
            editContent={props.editContent}
            fetchData={props.fetchData}
          />
        );
      })}
    </ul>
  );
}
export default TodoList;
