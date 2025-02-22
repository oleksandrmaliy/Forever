import "./App.css";

const App = () => {
  const remInPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  console.log(`1rem = ${remInPx}px`);

  return (
    <>
      <p>Welcome to Forever !!!</p>
    </>
  );
};

export default App;
