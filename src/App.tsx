import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Habit from './pages/Habit/index';
import HabitSuccess from './pages/Habit/Success';
import Subscribe from './pages/Subscribe';
import SubscribeSuccess from './pages/Subscribe/SubscribeSuccess';
import PageNotFound from './pages/PageNotFound';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/subscribe/success" element={<SubscribeSuccess />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="/habit/success" element={<HabitSuccess />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
