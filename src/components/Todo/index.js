import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    //console.log(status);
  }, [todo]);
  return (
    <section className="todoapp">
      <Header
        doList={todo}
        addNew={setTodo}
        status={status}
        setStatus={setStatus}
      />
      <List
        doList={todo}
        addNew={setTodo}
        status={status}
        setStatus={setStatus}
      />
      <Footer
        doList={todo}
        addNew={setTodo}
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}

export default Todo;
