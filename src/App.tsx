import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ComparisonProvider } from "./contexts/ComparisonContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import GameSelectorPage from "./pages/GameSelectorPage";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import Compare from "./pages/Compare";
import RoomCalculator from "./pages/RoomCalculator";
import OrderTracking from "./pages/OrderTracking";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import DeliveryInfo from "./pages/DeliveryInfo";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/urunler/:category" component={Products} />
      <Route path="/urun/:id" component={ProductDetail} />
      <Route path="/sepet" component={Cart} />
      <Route path="/favoriler" component={Favorites} />
      <Route path="/oyun-secici" component={GameSelectorPage} />
      <Route path="/profil" component={Profile} />
      <Route path="/siparislerim" component={MyOrders} />
      <Route path="/karsilastir" component={Compare} />
      <Route path="/oda-hesaplayici" component={RoomCalculator} />
      <Route path="/siparis-takibi" component={OrderTracking} />
      <Route path="/iade-degisim" component={ReturnsExchanges} />
      <Route path="/teslimat-bilgileri" component={DeliveryInfo} />
      <Route path="/sss" component={FAQ} />
      <Route path="/gizlilik-politikasi" component={PrivacyPolicy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <FavoritesProvider>
          <ComparisonProvider>
            <ThemeProvider defaultTheme="light">
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </ThemeProvider>
          </ComparisonProvider>
        </FavoritesProvider>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
