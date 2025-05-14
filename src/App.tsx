import { Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Tempora from './pages/Tempora/Tempora';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tempora" element={<Tempora />} />
    </Routes>
  )
}

export default App
