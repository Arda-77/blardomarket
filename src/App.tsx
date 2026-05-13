import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import AIAssistant from "./components/AIAssistant";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Toaster } from "sonner";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen bg-[#FAFAF7]">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/urunler/:category" component={Products} />
            <Route path="/sepet" component={Cart} />
            <Route path="/favoriler" component={Favorites} />
            <Route>404 Not Found</Route>
          </Switch>
          <AIAssistant />
          <Toaster position="top-center" />
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}