import { useEffect, useState } from "react";

const BtnSubsection = ({ txt, subsections }) => {
  const [abrir, setAbrir] = useState(false);

  const handleAbrirSubsection = () => {
    setAbrir(true);
    if (abrir) {
      setAbrir(false);
    }
  };

  return (
    <div className="btn__subsection">
      <p onClick={handleAbrirSubsection}>{txt}</p>
      <div onClick={handleAbrirSubsection}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
      </div>
      <section className={abrir ? "open" : "close"}>
        {abrir ? (
          subsections.map((subsection) => (
            <a href={subsection.href}>{subsection.txt}</a>
          ))
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default BtnSubsection;
