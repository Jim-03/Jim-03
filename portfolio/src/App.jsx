import LandingPage from './pages/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Gui from './pages/GUI/Gui.jsx';
import { useEffect } from 'react';
import Cli from './pages/CLI/Cli.jsx';

function App () {
  useEffect(() => {
    document.title = "Jim's Portfolio";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/gui' element={<Gui />} />
        <Route path="/cli" element={<Cli/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
