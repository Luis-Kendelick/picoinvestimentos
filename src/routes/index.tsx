import BeAClient from '@/pages/BeACliente';
import Home from '@/pages/Home';
import Insights from '@/pages/Insights';
import NossosDiferenciais from '@/pages/NossosDiferenciais';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-diferenciais" element={<NossosDiferenciais />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/seja-cliente" element={<BeAClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
