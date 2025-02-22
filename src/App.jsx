import "./App.css";

const App = () => {
  const remInPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  console.log(`1rem = ${remInPx}px`);

  return (
    <>
      <p className="m-2 p-4 font-bold text-amber-900">Welcome to Forever !!!</p>
    </>
  );
};

export default App;
