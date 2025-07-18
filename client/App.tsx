import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Index from "./pages/Index";
import Originals from "./pages/Originals";
import Canvas from "./pages/Canvas";
import My from "./pages/My";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-webtoon-gray">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/my" element={<My />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
