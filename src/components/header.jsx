const Header = ({ children }) => {
  return (
    <div className="p-1 text-center sm:p-2 md:p-3 lg:p-4 xl:p-5">
      <h1 className="inline-block pt-5 font-vibes text-5xl whitespace-nowrap text-yellow-200 sm:pt-5 sm:text-6xl md:pt-6 md:text-7xl lg:pt-7 lg:text-8xl xl:pt-8 xl:text-9xl">
        Наталя М
      </h1>
      <h3 className="font-poiret text-lg text-yellow-200 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
        Підприємець Форевер
      </h3>
      <p>ffc600 abt yellow forever - yellow-400, 3a9860 green forever, </p>
      {/* <p className="inline-block rotate-[-10]">Цей текст нахилений під кутом</p>
      <p className="inline-block skew-x-[-10]">Цей текст перекошений</p>
      <p className="inline-block transition-transform group-hover:rotate-6">
        Наведи курсор – і текст повернеться
      </p> */}
      {/* <p className="inline-block" style={{ transform: "rotate(-30deg)" }}>
        Цей текст нахилений під кутом
      </p>
      <p className="inline-block" style={{ transform: "skewX(-10deg)" }}>
        Цей текст перекошений
      </p> */}
      {children}
    </div>
  );
};

export default Header;
