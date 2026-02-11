import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MoodSelection from './pages/MoodSelection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mood" element={<MoodSelection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
