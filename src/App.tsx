import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import MainPage from "./pages/MainPage";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/subscription" element={<Subscription />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
