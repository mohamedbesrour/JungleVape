import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
//commande rfce
import Home from "./pages/Acceuil";
import Sports from "./pages/Sports";
import Meteo from "./pages/Meteo";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root"));
