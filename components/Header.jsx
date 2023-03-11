import React from "react";

const Header = ({ InputText, setInputText, todos, setTodos }) => {
  // Propsları burada alıyoruz.
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }; //
  const submitTodoHandler = (e) => {
    e.preventDefault(); // sayfa yenilenmesini engelliyoruz.
    if (InputText === "") {
      alert("Please enter a todo");
      return; // input boşsa fonksiyonu sonlandırıyoruz.
    }
    setTodos([
      ...todos, // önceki todoları koruyoruz.
      { text: InputText, completed: false, id: Math.random() * 1000 }, // Burada obje oluşturuyoruz.
    ]);
    setInputText(""); // inputu temizliyoruz.
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitTodoHandler}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={InputText}
            onChange={inputTextHandler}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;