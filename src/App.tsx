import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SubscribeForm from './pages/Subscribe/SubscribeForm';
import SubscribeSuccess from './pages/Subscribe/SubscribeSuccess';
import PageNotFound from './pages/PageNotFound';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Subscribe />} />
          {/* <Route path="/subscribe" element={<MainPage />} /> */}
          <Route path="/subscribe/:param" element={<SubscribeForm />} />
          <Route path="/subscribe/success" element={<SubscribeSuccess />} />
          {/* <Route path="/habit" element={<Habit />} />
          <Route path="/habit/success" element={<HabitSuccess />} /> */}
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
