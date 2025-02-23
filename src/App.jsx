import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  // const remInPx = parseFloat(
  //   getComputedStyle(document.documentElement).fontSize
  // );
  // console.log(`1rem = ${remInPx}px`);
  const [position, setPosition] = useState("translate-x-[90vw]");

  useEffect(() => {
    setTimeout(() => {
      setPosition("translate-x-0");
    }, 1000);
  }, []);

  return (
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden bg-amber-900 p-10">
      <div
        className={`absolute h-48 w-48 place-content-center bg-cyan-300 text-center align-middle transition-transform duration-1000 ease-out ${position}`}
      >
        lalala
      </div>
    </div>
  );
};

export default App;

// import "./App.css";

// const App = () => {
//   const [position, setPosition] = useState("left-0");

//   useEffect(() => {
//     setTimeout(() => {
//       setPosition("right-0 translate-x-full");
//     }, 1000);
//   }, []);

//   return (
//     <div className="relative mx-auto h-96 w-96 bg-amber-900 p-10">
//       <div
//         className={`absolute mx-auto h-48 w-48 place-content-center bg-cyan-300 text-center align-middle transition-all duration-500 ${position}`}
//       >
//         lalala
//       </div>
//     </div>
//   );
// };

// export default App;
