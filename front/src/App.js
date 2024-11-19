import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Produtos from './pages/products.js';
import ProdutosAll from './pages/produtosall.js';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/:id" element={<Produtos />} />
        <Route path="/produtos" element={<ProdutosAll />} />
        <Route path="/historico" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;