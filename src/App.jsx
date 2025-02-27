import Container from "./components/container";
import Top from "./components/top.jsx";
import Header from "./components/header.jsx";
import HeroBlock from "./components/heroBlock.jsx";
import ShopBlock from "./components/shopBlock.jsx";
import ForeverBlock from "./components/foreverBlock.jsx";
import Footer from "./components/footer.jsx";
import Bottom from "./components/bottom.jsx";

const App = () => {
  return (
    <>
      <Top>
        <Container>
          <Header />
        </Container>
      </Top>
      <Container>
        <HeroBlock />
        <ShopBlock />
        <ForeverBlock />
        {/* <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <div className="h-10 w-10 animate-ping rounded-full bg-blue-500"></div>
          <div className="flex h-16 w-16 animate-bounce items-center justify-center bg-red-500 text-white">
            🔔
          </div>
          <div className="h-10 w-32 animate-pulse rounded bg-gray-300"></div> */}
      </Container>
      <Bottom>
        <Container>
          <Footer>
            <p>Footer</p>
            <p>Hello, world!</p>
          </Footer>
        </Container>
      </Bottom>
    </>
  );
};

export default App;
