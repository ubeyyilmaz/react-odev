import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [InputText, setInputText] = useState(""); //  Inputumuzun değerini tutacak.
  const [todos, setTodos] = useState([]); // Todo listemizi tutacak.
  const [status, setStatus] = useState(""); // Todo listemizin durumunu tutacak.
  const [filteredTodos, setFilteredTodos] = useState([]); // Filtrelenmiş todo listemizi tutacak.

  useEffect(() => {
    // Todo listemizde değişiklik olduğunda çalışacak.
    const filterHandler = () => {
      switch (
        status // status değişkenine göre filtreleme işlemi yapacak.
      ) {
        case "completed": // Eğer status değişkeni completed ise
          setFilteredTodos(todos.filter((todo) => todo.completed === true)); // completed true olanları filtrele
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false)); // completed false olanları filtrele
          break;
        default: // Eğer status değişkeni completed veya active değilse tüm todoları filtrele
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler(); //
  }, [todos, status]); // todos ve status değişkenlerinde değişiklik olduğunda filterHandler fonksiyonunu çalıştır.
  return (
    <div>
      <section className="todoapp">
        <Header
          InputText={InputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;