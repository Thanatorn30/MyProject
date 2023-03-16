
import { useEffect, useState } from "react";
// import PageLimit from "./PageLimit";
// import Pagination from "./Pagination";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
// import ShowItem from "./ShowItem";
// import Sort from "./Sort";
import TodoList from "./TodoList";

function TodoContainer(props) {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  // const [sort, setSort] = useState("");

  // ********ทำ searchText 51:56 Clip 23
  useEffect(() => {
    const queryString = `?title=${searchText}&completed=${searchStatus}`;
    // &sort=${sort}
    props.fetchData(queryString);
  }, [searchText,searchStatus]);

  function search(data){
    return setSearchStatus(data)
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
        <SearchStatus 
          value={searchText}
          search={search}
        />
      </div>
      <div className="my-2 d-flex justify-content-between">
        {/* <PageLimit /> */}
        {/* <Sort /> */}
      </div>
      <TodoList
        todo={props.todo}
        fetchData={props.fetchData}
        editContent={props.editContent}
      />
      {/* <div className="my-2 d-flex justify-content-between align-items-center">
        <ShowItem />
        <Pagination />
      </div> */}
    </>
  );
}
export default TodoContainer;
