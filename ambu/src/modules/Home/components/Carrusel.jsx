import { useEffect, useState, useRef } from "react";

import img1 from "../../../assets/img/carrusel/img1.jpg";
import img2 from "../../../assets/img/carrusel/img2.jpg";

const Carrusel = () => {
  const [contador, setContador] = useState(0);
  const [width, setWidth] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const slides = [
    {
      image: img1,
      content: "TU SALUD ES NUESTRA PRIORIDAD",
      p: "Tene la seguridad de estar protegido tanto vos como tu familia, desde el integrante mas pequeño",
    },
    {
      image: img2,
      content: "GESTIONA TUS CONSULTAS DESDE CASA",
      p: "Te ofrecemos el mejor asesoramiento a traves de nuestros canales de atencion con respuesta inmediata",
    },
  ];

  const moveCarousel = (index) => {
    const transformValue = -width * index + "px";
    sliderRef.style.transform = `translateX(${transformValue})`;
    sliderRef.style.transition = "transform 1s";
  };

  const handleNextSlide = () => {
    const nextSlideIndex = (contador + 1) % slides.length;
    setContador(nextSlideIndex);
    moveCarousel(nextSlideIndex);
  };

  const handlePreviousSlide = () => {
    const previousSlideIndex = (contador - 1 + slides.length) % slides.length;
    setContador(previousSlideIndex);
    moveCarousel(previousSlideIndex);
  };

  const handlePuntoClick = (index) => {
    setContador(index);
    moveCarousel(index);
  };

  useEffect(() => {
    setWidth(sliderRef?.firstChild.clientWidth);

    const resizeHandler = () => {
      setWidth(sliderRef?.firstChild.clientWidth);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [sliderRef]);

  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleResumeAnimation = () => {
    setPaused(false); // Reanudar animación
  };

  useEffect(() => {
    const handleSlide = () => {
      const nextSlideIndex = (contador + 1) % slides.length;
      const transformValue = -width * nextSlideIndex + "px";
      sliderRef.style.transform = `translateX(${transformValue})`;
      sliderRef.style.transition = "transform 1s";
      setContador(nextSlideIndex);
      handleResumeAnimation();
    };

    const startInterval = () => {
      if (!paused) {
        intervalRef.current = setInterval(handleSlide, 5100);
      }
    };

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [contador, paused, slides.length, sliderRef, width]);

  const generatePuntosIndicadores = () => {
    return Array.from({ length: slides.length }).map((_, index) => (
      <div
        key={index}
        className={`punto${index === contador ? " activo" : ""}`}
        onClick={() => handlePuntoClick(index)}
      ></div>
    ));
  };

  return (
    <div className="contenedor">
      <div className="flechas">
        <div className="flechaDer" onClick={handlePreviousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </div>
        <div className="flechaDer" onClick={handleNextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </div>
      </div>
      <div className="slider-contenedor" ref={setSliderRef}>
        {slides.map((slide, index) => (
          <section className="contenido-slider" key={index}>
            <div className={`contenedorTxt ${paused ? "pausado" : ""}`}>
              <h2
                className={`texto-entrada ${contador === index ? "activo" : ""
                  }`}
              >
                {slide.content}
              </h2>
              <p
                className={`texto-entrada ${contador === index ? "activo" : ""
                  }`}
              >
                {slide.p}
              </p>
            </div>
            <div className="contenedorImg">
              {/* <img src={slide.image} alt={`Slide ${index + 1}`} /> */}
            </div>
          </section>
        ))}
      </div>
      <div className="contendorPuntos">
        <div className="puntos-indicadores">{generatePuntosIndicadores()}</div>
      </div>
    </div>
  );
};

export default Carrusel;
