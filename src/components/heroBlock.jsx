import natalya from "../assets/images/natalya.jpg";

const HeroBlock = () => {
  return (
    <div
      className={
        "relative mb-8 grid w-full grid-cols-3 gap-8 border-4 border-red-600 bg-[url('/aloeCorner.jpg')] bg-cover bg-center p-8 before:absolute before:inset-0 before:bg-white/50 before:backdrop-blur-sm before:content-['']"
      }
    >
      <div className="relative z-10 border-4 border-red-600">
        <img
          src={natalya}
          alt="Natalya"
          className="relative -top-30 z-20 float-left block w-full border-8 border-backcolor shadow-all-green"
        />
      </div>
      {/* sm:-top-8 md:-top-12 lg:-top-24 xl:-top-48 2xl:-top-60 */}
      <div className="relative z-10 order-2 col-span-2 border-4 border-red-500">
        <p className="indent-14 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores! Dignissimos quia sed, ducimus ut et ullam magnam quis
          laudantium, adipisci quasi repellendus labore commodi recusandae
          reprehenderit, obcaecati dolore ex? Eaque culpa laborum nostrum
          delectus nemo obcaecati? Sit reiciendis tempore dolor. Dolore at
          doloremque sapiente libero repellendus soluta cupiditate eligendi
          debitis! Doloribus earum veritatis molestiae esse recusandae ut
          maiores incidunt! Eius hic mollitia exercitationem dicta maiores velit
          autem, perspiciatis nesciunt saepe harum quisquam iste, aliquid ut
          aut. Voluptatem ipsam temporibus dolore eos maxime reiciendis
          nesciunt. Deserunt velit amet sunt exercitationem? Consequuntur porro
          iste fugiat perspiciatis aliquid earum enim amet quod dicta. Amet
          veniam delectus sequi vel voluptate, molestias reprehenderit
          consectetur nulla dignissimos temporibus consequatur tenetur placeat
          ipsam itaque perspiciatis dolores. Voluptates mollitia nam doloremque
          repudiandae labore! Error, ex quam asperiores nostrum necessitatibus
          repudiandae similique iure velit quod perspiciatis, at nemo pariatur
          assumenda dolores libero non quis nobis impedit, accusantium esse.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          maiores! Dignissimos quia sed, ducimus ut et ullam magnam quis
          laudantium, adipisci quasi repellendus labore commodi recusandae
          reprehenderit, obcaecati dolore ex? Eaque culpa laborum nostrum
          delectus nemo obcaecati? Sit reiciendis tempore dolor. Dolore at
          doloremque sapiente libero repellendus soluta cupiditate eligendi
          debitis! Doloribus earum veritatis molestiae esse recusandae ut
          maiores incidunt! Eius hic mollitia exercitationem dicta maiores velit
          autem, perspiciatis nesciunt saepe harum quisquam iste, aliquid ut
          aut. Voluptatem ipsam temporibus dolore eos maxime reiciendis
          nesciunt. Deserunt velit amet sunt exercitationem? Consequuntur porro
          iste fugiat perspiciatis aliquid earum enim amet quod dicta. Amet
          veniam delectus sequi vel voluptate, molestias reprehenderit
          consectetur nulla dignissimos temporibus consequatur tenetur placeat
          ipsam itaque perspiciatis dolores. Voluptates mollitia nam doloremque
          repudiandae labore! Error, ex quam asperiores nostrum necessitatibus
          repudiandae similique iure velit quod perspiciatis, at nemo pariatur
          assumenda dolores libero non quis nobis impedit, accusantium esse.
        </p>
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
