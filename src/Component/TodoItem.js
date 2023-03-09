function TodoItem(){
    return(
        <>
            <li className="list-group-item p-3 callout-warning">
                <div className="d-flex align-items-center">
                    <span className="flex-fill" role="button">
                    Watch movie
                    </span>
                    <div className="btn-group">
                    <button className="btn btn-outline-secondary">
                        <i className="fa-solid fa-toggle-off" />
                    </button>
                    <button className="btn btn-outline-secondary">
                        <i className="fa-regular fa-trash-can" />
                    </button>
                    </div>
                </div>
                
            </li>
            
        </>
        
    )
}
export default TodoItem