import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MoodSelection from './pages/MoodSelection';
import GameSelection from './pages/GameSelection';
import BreathingGame from './games/BreathingGame';
import FocusTapGame from './games/FocusTapGame';
import MemoryGame from './games/MemoryGame';
import StressPopGame from './games/StressPopGame';
import Cooldown from './pages/Cooldown';
import Ready from './pages/Ready';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mood" element={<MoodSelection />} />
          <Route path="games" element={<GameSelection />} />
          <Route path="game/breathing" element={<BreathingGame />} />
          <Route path="game/focus" element={<FocusTapGame />} />
          <Route path="game/memory" element={<MemoryGame />} />
          <Route path="game/stress-pop" element={<StressPopGame />} />
          <Route path="cooldown" element={<Cooldown />} />
          <Route path="ready" element={<Ready />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
