function List({ doList, addNew, status, setStatus }) {
  const removeToDo = (index) => {
    const todoList = [...doList];
    todoList.splice(index, 1);
    addNew(todoList);
    setStatus(todoList);
  };

  const completedToDo = (index) => {
    const todoList = [...doList];
    todoList[index].isActive = !todoList[index].isActive;
    addNew(todoList);
    setStatus(todoList);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {status.map((list, i) => (
          <li className={list.isActive ? "completed" : ""} key={i}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => completedToDo(i)}
              />
              <label>{list.item}</label>
              <button
                className="destroy"
                onClick={() => removeToDo(i)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
