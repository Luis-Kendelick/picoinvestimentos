import BeAClient from '@/pages/BeACliente';
import Home from '@/pages/Home';
import Insights from '@/pages/Insights';
import NossosDiferenciais from '@/pages/NossosDiferenciais';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash) {
      console.log('🚀 ~ window.location.hash:', window.location.hash);
      const section = document.querySelector(window.location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
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
