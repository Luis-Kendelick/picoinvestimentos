import BeAClient from '@/pages/BeACliente';
import Home from '@/pages/Home';
import Insights from '@/pages/Insights';
import NossosDiferenciais from '@/pages/NossosDiferenciais';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import UsageTerms from '@/pages/UsageTerms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'auto' });
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
        <Route path='/politica-de-privacidade' element={<PrivacyPolicy />} />
        <Route path='/termo-de-uso' element={<UsageTerms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
