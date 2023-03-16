import { useEffect, useState } from "react";

import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";

import TodoList from "./TodoList";

function TodoContainer(props) {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    const queryString = `?title=${searchText}&completed=${searchStatus}`;

    props.fetchData(queryString);
  }, [searchText, searchStatus]);

  function search(data) {
    return setSearchStatus(data);
  }

  return (
    <>
      <div className="my-2 d-flex gap-3">
        <SearchText
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          clear={() => setSearchText("")}
        />
        <SearchStatus value={searchText} search={search} />
      </div>

      <TodoList
        todo={props.todo}
        fetchData={props.fetchData}
        editContent={props.editContent}
      />
    </>
  );
}
export default TodoContainer;
