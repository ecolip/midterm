import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Message from './pages/message';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
