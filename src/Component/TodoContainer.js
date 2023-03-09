import PageLimit from "./PageLimit";
import Pagination from "./Pagination";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
import ShowItem from "./ShowItem";
import Sort from "./Sort";
import TodoList from "./TodoList";

function TodoContainer(){
    return(
        <>
            <div className="my-2 d-flex gap-3">
                <SearchText/>
                <SearchStatus/>
            </div>
            <div className="my-2 d-flex justify-content-between">
                <PageLimit/>
                <Sort/>
            </div>
            <TodoList/>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <ShowItem/>
                <Pagination/>
            </div>
        </>


    )
}
export default TodoContainer