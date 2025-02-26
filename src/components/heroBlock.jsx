import natalya from "../assets/images/natalya.jpg";

const HeroBlock = ({ children }) => {
  return (
    <div
      className={
        "relative mb-8 flex w-full bg-[url('/aloeCorner.jpg')] bg-cover bg-center px-4 py-8 before:absolute before:inset-0 before:bg-white/50 before:backdrop-blur-sm before:content-['']"
      }
    >
      <img
        src={natalya}
        alt="Photo"
        className="border-backcolor relative -top-[calc(6vw)] left-[calc(3vw)] z-10 block h-1/3 w-1/3 rounded-full border-8 shadow-all-green"
      />
      <div className="relative z-10 ml-auto w-3/5">
        <p className="indent-14 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          doloremque eos non excepturi exercitationem rerum dolores quam numquam
        </p>
      </div>

      {children}
    </div>
  );
};

export default HeroBlock;
