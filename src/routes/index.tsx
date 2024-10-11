import Home from '@/pages/Home';
import NossosDiferenciais from '@/pages/NossosDiferenciais';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-diferenciais" element={<NossosDiferenciais />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
