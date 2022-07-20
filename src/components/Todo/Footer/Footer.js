function Footer({ doList, addNew, status, setStatus, btn, setBtn }) {
  const all = () => {
    console.log("all");
    setStatus(doList);
  };
  const active = () => {
    console.log("active");
    const filtered = doList.filter(({ isActive }) => isActive === false);
    setStatus(filtered);
  };
  const passive = () => {
    console.log("passive");
    const filtered = doList.filter(({ isActive }) => isActive === true);
    setStatus(filtered);
  };

  const clearCompleted = () => {
    const clearTodos = doList.filter(({ isActive }) => isActive === false);
    addNew(clearTodos);
    setStatus(clearTodos);
  };

  const handleClick = (event) => {
    setBtn(event.target.id);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{status.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={btn === "all" ? "selected" : undefined}
            id={"all"}
            onClick={(event) => {
              all();
              handleClick(event);
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={btn === "active" ? "selected" : undefined}
            id={"active"}
            onClick={(event) => {
              active();
              handleClick(event);
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={btn === "passive" ? "selected" : undefined}
            id={"passive"}
            onClick={(event) => {
              passive();
              handleClick(event);
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
