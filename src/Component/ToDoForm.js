function TodoForm(){
    return(
        <div className="my-4">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-primary">
                  <i className="fa-solid fa-check" />
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              
            </form>
          </div>
    )
}
export default TodoForm