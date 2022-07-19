import { useState, useEffect } from "react";

const initialFormValues = { item: "", isActive: false };
function Header({ addNew, doList, setStatus }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [doList]);

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.item === "") {
      return false;
    }
    setStatus([...doList, form]);
    addNew([...doList, form]);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="item"
          autoFocus
          value={form.item}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Header;
