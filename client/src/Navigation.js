import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
//commande rfce
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Nous from "./pages/Nous";
import Panier from "./pages/Panier";
import Contact from "./pages/Contact";
import Error from "./pages/Connexion";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/nous" element={<Nous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root"));
