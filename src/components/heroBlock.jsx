import natalya from "../assets/images/natalya.jpg";
import aloeVera from "../assets/images/aloeVera.jpg";

const HeroBlock = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mb-8 grid min-h-110 w-full grid-cols-3 gap-8 border-4 border-red-500 bg-green-200 p-8">
      <div className="relative border-4 border-red-500">
        <img
          src={natalya}
          alt="Natalya"
          className="absolute -top-24 -left-0 w-full rounded-full border-8 border-white shadow-all-green"
        />
      </div>

      {/* sm:-top-8 md:-top-12 lg:-top-24 xl:-top-48 2xl:-top-60 */}
      <div className="col-span-2">
        <p className="mb-8 indent-14 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          consectetur quia dolorum dignissimos? Minus accusamus explicabo,
          repellat, libero vitae in unde porro reiciendis distinctio dolorum
          quia aut nihil a? Ipsum. Consequuntur perspiciatis totam ratione
          fugiat minus quisquam aspernatur laborum ut illum. Recusandae et
          suscipit soluta cumque repellat nisi natus quod? Animi molestiae iusto
          perspiciatis, officiis culpa consequatur pariatur molestias modi!
          Beatae in, necessitatibus culpa reiciendis cum maiores perspiciatis
          natus maxime quod, dolores accusamus exercitationem temporibus
          nesciunt atque, facere velit dignissimos voluptates quas corrupti
          asperiores. Tempora dolore at cum aliquid neque. Atque modi, inventore
          aliquam laborum rerum iure consequatur? Quam eius quibusdam officia
          nihil, mollitia ratione adipisci expedita tempore, perspiciatis
          molestiae repellat delectus quas dolores tempora soluta consequatur
          corrupti eos? Molestias.
        </p>
        <div className="border-4 border-red-500">
          <button
            onClick={scrollToFooter}
            className="flex w-full items-center gap-4 bg-blue-300 p-4 hover:bg-red-300"
          >
            <img
              src={aloeVera}
              alt="Avatar"
              className="h-auto w-24 rounded-full border-4 border-red-500"
            />
            <p className="flex h-full w-full items-center justify-center text-center">
              Зв&apos;яжіться зі мною
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

// import natalya from "../assets/images/natalya.jpg";

// const HeroBlock = () => {
//   return (
//     <div className="relative mb-8 grid w-full grid-cols-3 gap-16 bg-[url('/aloeCorner.jpg')] bg-cover bg-center px-4 py-8 before:absolute before:inset-0 before:bg-white/50 before:backdrop-blur-sm before:content-['']">
//       <div className="relative -top-32 flex justify-center">
//         <img
//           src={natalya}
//           alt="Photo"
//           className="relative z-10 h-auto w-full rounded-full border-8 border-backcolor shadow-all-green"
//         />
//       </div>
//       <div className="relative z-10 col-span-2 flex items-center">
//         <p className="indent-14 text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
//           doloremque eos non excepturi exercitationem rerum dolores quam numquam
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroBlock;
