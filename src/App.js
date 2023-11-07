import "./App.css";
import HomeComp from "./components/HomeComp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import SearchComp from "./components/SearchComp";
import MyContext from "./components/contextApi/MyContext";

function App() {
  return (
    <MyContext>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomeComp />}>
              <Route path="/" element={<Mainpage />} />
              <Route path="/search" element={<SearchComp />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </MyContext>
  );
}

export default App;
