import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '~/LoginPage';
import { Navbar } from '~/NavBar';
import DcPage from '~/DcPage';
import MarvelPage from '~/MarvelPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='search' element={<MarvelPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
