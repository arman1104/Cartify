import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
