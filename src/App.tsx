import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import MainPage from "./pages/MainPage";
import Subscription from "./pages/Subscription";
import Success from "./pages/Success.tsx";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<Subscription />} />
          <Route path="/subscribe/success" element={<Success />} />
          {/* <Route path={'*'} element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
