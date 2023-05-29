import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "../Components/Navigation/Navigation";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/Home/Home";
import { Contact } from "../Components/Contact/Contact";
import { AboutMe } from "../Components/AboutMe/AboutMe";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { Error } from "../Components/Error/Error";
import { PaginaPersonal } from "../Components/Portfolio/PaginaPersonal";
import { LookingPlace } from "../Components/Portfolio/LookingPlace";
import { Pokedex } from "../Components/Portfolio/Pokedex";
import { SimuladorPedidos } from "../Components/Portfolio/SimuladorPedidos";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* Navegacion */}
      <Navigation></Navigation>
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacto" element={<Contact></Contact>}></Route>
        <Route path="/acerca-de-mi" element={<AboutMe></AboutMe>}></Route>
        <Route path="/portafolio/*" element={<Portfolio></Portfolio>}>
          <Route index element={<LookingPlace></LookingPlace>}></Route>
          <Route
            path="paginaPersonal"
            element={<PaginaPersonal></PaginaPersonal>}
          ></Route>
          <Route
            path="lookingPlace"
            element={<LookingPlace></LookingPlace>}
          ></Route>
          <Route path="pokedex" element={<Pokedex></Pokedex>}></Route>
          <Route
            path="simuladorPedidos"
            element={<SimuladorPedidos></SimuladorPedidos>}
          ></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </BrowserRouter>
  );
};
