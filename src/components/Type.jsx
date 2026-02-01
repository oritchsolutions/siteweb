import React from "react";

const Type = ({ active, setActive }) => {
  const buttonClass = (value) =>
    `px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all cursor-pointer
    ${
      active === value
        ? "bg-primary dark:bg-primary-dark text-white dark:text-dark font-bold"
        : "bg-white dark:bg-team border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark"
    }`;

  return (
    <section className="w-full flex justify-center
    bg-white dark:bg-dark sticky top-1 z-40 pb-10">
      <div className="max-w-300 w-full flex flex-wrap justify-center gap-3 mt-5">
        <button onClick={() => setActive("all")} className={buttonClass("all")}>
          Tous les projets
        </button>
        <button onClick={() => setActive("web")} className={buttonClass("web")}>
          Applications web
        </button>
        <button onClick={() => setActive("mobile")} className={buttonClass("mobile")}>
          Applications mobiles
        </button>
        <button onClick={() => setActive("desktop")} className={buttonClass("desktop")}>
          Applications desktop
        </button>
      </div>
    </section>
  );
};

export default Type;
