import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { CartProvider } from "./Context/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AllRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
