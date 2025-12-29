import { Route, Routes } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <>
    <header className="bg-zinc-900 text-white">
      <p className="p-2 text-center text-sm bg-amber-400 text-zinc-900">
        🚧 This portfolio is currently under construction! 🚧
      </p>
      <Navbar />
    </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
