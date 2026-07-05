import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Sobre from "./components/Sobre";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function Inicio() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      {/* HEADER FIXO */}
      <Header />

      {/* ESPAÇO PRA NÃO FICAR EM CIMA DO HEADER */}
      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/fotos" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contato" element={<Inicio />} />
        </Routes>
      </div>

      {/* BOTÃO FLUTUANTE EM TODAS AS PÁGINAS */}
      <WhatsAppButton />
    </>
  );
}

export default App;