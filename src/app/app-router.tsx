import { Route, Routes } from 'react-router-dom';

import { PageActors } from 'pages/page-actors';
import { PageAbout } from 'pages/page-about';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageActors />} />
      <Route path="/about" element={<PageAbout />} />
    </Routes>
  );
}
