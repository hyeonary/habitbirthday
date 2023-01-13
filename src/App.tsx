import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import MainPage from "./pages/MainPage";
import Habit from "./pages/Habit/index";
import Success from "./pages/Success/index";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="/habit/success" element={<Success />} />
          {/* <Route path={'*'} element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
