import {BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import English from './pages/Englishtest';
import Tagalog from './pages/Tagalogtest';
import Index from './pages/Index';
import './assets/css/style.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path='/english' element={<English />} />
        <Route path='tagalog' element={<Tagalog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
