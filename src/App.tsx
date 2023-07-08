import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Four0four from "./components/Four0four";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Four0four />} />
    </Routes>
  );
}

export default App;
