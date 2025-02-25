import Container from "./components/container";
import Top from "./components/top.jsx";
import Header from "./components/header.jsx";
import ForeverBlock from "./components/foreverBlock.jsx";
import ShopBlock from "./components/shopBlock.jsx";
import ShopLink from "./components/shopLink.jsx";
import Bottom from "./components/bottom.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <>
      <Top>
        <Container>
          <Header></Header>
        </Container>
      </Top>
      <Container>
        <ForeverBlock>
          <p>Forever Block</p>
          {/* <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <div className="h-10 w-10 animate-ping rounded-full bg-blue-500"></div>
          <div className="flex h-16 w-16 animate-bounce items-center justify-center bg-red-500 text-white">
            🔔
          </div>
          <div className="h-10 w-32 animate-pulse rounded bg-gray-300"></div> */}
        </ForeverBlock>
        <ShopBlock>
          <p>Shop Block</p>
        </ShopBlock>
        <ShopLink>
          <p>Link 1 Block</p>
        </ShopLink>
        <ShopLink>
          <p>Link 2 Block</p>
        </ShopLink>
        <ShopLink>
          <p>Link 3 Block</p>
        </ShopLink>
        <ShopLink>
          <p>Link 4 Block</p>
        </ShopLink>
        <ShopLink>
          <p>Link 5 Block</p>
        </ShopLink>
        <ShopLink>
          <p>Link 6 Block</p>
        </ShopLink>
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
