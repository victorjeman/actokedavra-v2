import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/home.page';
import { AboutPage } from 'pages/about.page';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
