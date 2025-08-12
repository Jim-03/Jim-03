import LandingPage from './pages/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
