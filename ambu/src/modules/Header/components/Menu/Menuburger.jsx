import { useState } from "react";

const Menuburger = () => {
  const [abrirMenu, setAbrirMenu] = useState(false);

  const handleAbrirMenu = () => {
    setAbrirMenu(true);
  };

  const handleCerrarMenu = () => {
    setAbrirMenu(false);
  };
  return (
    <>
      {abrirMenu ? (
        <nav id="menu__burger">
          <div onClick={handleCerrarMenu} className="btn__salir">
          <svg
            className="x__icon"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          </div>
          <a href="">Nosotros</a>
          <a href="">Tratamiento</a>
          <a href="">Arancelado</a>
          <a href="">Preguntas Frecuentes</a>
        </nav>
      ) : (
        <div id="burger" onClick={handleAbrirMenu}>
          <svg className="icon__burger" viewBox="0 0 24 24" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Menuburger;
