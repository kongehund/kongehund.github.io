import { Route, HashRouter } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Tempora from './pages/Tempora/Tempora';

function App() {
  return (
    <HashRouter>
      <Route path="/" element={<Homepage />} />
      <Route path="/tempora" element={<Tempora />} />
    </HashRouter>
  )
}

export default App
