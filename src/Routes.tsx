import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import MainPage from './pages/mainpage/MainPage';
import Reservations from './pages/reservations/Reservations';
import Salons from './pages/salons/Salons';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rezervace" element={<Reservations />} />
        <Route path="/salony" element={<Salons />} />
      </Routes>
    </BrowserRouter>
  );
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <Routing />
  </ThemeProvider>
);

export default Root;
