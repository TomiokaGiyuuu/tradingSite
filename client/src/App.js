import Home from "./pages/home/Home";
import AboutProduct from "./components/aboutProduct/AboutProduct";
import ProductInfo from "./pages/productInfo/ProductInfo";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllObjects from "./pages/allObjects/AllObjects";
import TradeRoad from "./pages/TradeRoad/TradeRoad";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/product/:id" element={
              <ProductInfo/>
          }/>
          <Route path="/products" element={
              <AllObjects/>
          }/>
          <Route path="/traderoad/:id" element={
              <TradeRoad/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
