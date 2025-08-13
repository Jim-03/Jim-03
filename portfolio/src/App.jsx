import LandingPage from './pages/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

function App () {
  useEffect(() => {
    document.title = "Jim's Portfolio";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
