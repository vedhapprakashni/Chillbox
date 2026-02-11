import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder pages
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
    <h1 className="text-6xl mb-6 text-primary drop-shadow-[4px_4px_0_#000]">Chillbox</h1>
    <p className="text-xl mb-8 max-w-md">Calm your nerves before the big moment.</p>
    <button className="px-8 py-4 bg-secondary text-text font-bold text-lg border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all">
      Start Relaxing
    </button>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
