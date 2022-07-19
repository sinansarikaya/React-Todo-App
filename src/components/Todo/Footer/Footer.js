function Footer({ doList, status, setStatus }) {
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
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{status.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={all}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={active}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" onClick={passive}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
