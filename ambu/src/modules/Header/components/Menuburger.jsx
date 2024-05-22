import { useRef, useEffect, useState } from "react";

const MenuBurger = () => {
  // variables de abrir y cerrar menu
  const menuBtnRef = useRef(null);
  const offcanvasRef = useRef(null);
  const menuSpanRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  // funcionamiento de abrir y cerrar menu
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      offcanvasRef.current &&
      !offcanvasRef.current.contains(event.target) &&
      !menuBtnRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }
  };

  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("scroll", handleScroll);
      menuSpanRef.current.style.display = "none";
      disableBodyScroll(); // Deshabilitar el scroll del cuerpo cuando se abre el offcanvas
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
      menuSpanRef.current.style.display = "block";
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
      enableBodyScroll(); // Asegurarse de habilitar el scroll al desmontar el componente
    };
  }, [menuOpen]);

  return (
    <div id="menu-burger">
      <div
        className={`menu-btn ${menuOpen ? "close" : ""}`}
        ref={menuBtnRef}
        onClick={handleClick}
      >
        <span ref={menuSpanRef}></span>
      </div>
      <div className={`offcanvas ${menuOpen ? "show" : ""}`} ref={offcanvasRef}>
        <div className="close-btn" onClick={handleClick}></div>
        <div className="contendorLinks">
          <a className="links" to="/inicio" onClick={handleClick}>
            Inicio
          </a>
          <a className="links" to="/coberturas" onClick={handleClick}>
            Coberturas
          </a>
          <a className="links" to="/nosotros" onClick={handleClick}>
            Acerca de Nosotros
          </a>
          <a className="links" to="/afiliate" onClick={handleClick}>
            Afíliate
          </a>
          <a className="links" to="/trabajo" onClick={handleClick}>
            Trabaja con Nosotros
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBurger;
