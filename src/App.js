import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import TodoBox from "./components/TodoBox/TodoBox";
import Task from "./components/Task/Task";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<TodoBox />} />
          <Route path="/todo-items/:taskId" element={<Task />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
