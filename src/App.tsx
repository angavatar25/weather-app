import WeatherApp from './pages/WeatherApp';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WeatherApp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
