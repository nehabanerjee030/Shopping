import { Route, Routes } from "react-router-dom";

import NavBar from "./components/routes/navigation/NavigationComponent";
import Home from "./components/home/Home";
import SignInComponent from './components/routes/sign-in/SignInComponent';



const ShopComponent = () => {
  return <h1>{"I am the shopping component"}</h1>;
};

const CartComponent = () => {
  return <h1>{"I am the cart component"}</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="cart" element={<CartComponent />} />
        <Route path="sign-in" element={<SignInComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
