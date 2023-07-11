import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Four0four from "./pages/Four0four";
import { useEffect } from "react";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";

function App() {
  useEffect(() => {
    console.log(
      "              , ,\n" +
        "             /| |\\\n" +
        "            / | | \\\n" +
        "            | | | |     Neeaah, Whats up Doc !?!\n" +
        "            \\ | | /\n" +
        "             \\|w|/    /\n" +
        "             /_ _\\   /      ,\n" +
        "  /\\       _:()_():_       /]\n" +
        "  ||_     : ._=Y=_  :     / /\n" +
        " [)(_,\\   ',__\\W/ _,'    /  \\\n" +
        " [) \\_/\\    _/'='\\      /-/)\n" +
        "  [_| \\ \\  ///  \\ '._  / /\n" +
        "  :;   \\ \\///   / |  '` /\n" +
        "  ;::   \\ `|:   : |',_.'\n" +
        '  """    \\_|:   : |\n' +
        "           |:   : |'.\"\n" +
        "           /`._.'  \\/\n" +
        "          /  /|   /\n" +
        "         |  \\ /  /\n" +
        "          '. '. /\n" +
        "            '. '\n" +
        "            / \\ \\\n" +
        "           / / \\'=,\n" +
        "     .----' /   \\ (\\__\n" +
        "    (((____/     \\ \\  )\n" +
        "                  '.\\_)\n"
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Four0four />} />
      </Route>
    </Routes>
  );
}

export default App;
