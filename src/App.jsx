import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import CustomDesign from "@/pages/CustomDesign";
import Cart from "@/pages/Cart";

// My Account Pages
import MyAccount from "@pages/MyAccount/MyAccount";
import AccountOrders from "@pages/MyAccount/Orders";
import AccountDetails from "@pages/MyAccount/AccountDetails";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-beige text-navy">
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/custom-design" element={<CustomDesign />} />
            <Route path="/cart" element={<Cart />} />

            {/* My Account nested routes */}
            <Route path="/account" element={<MyAccount />} />
            <Route path="/account/orders" element={<AccountOrders />} />
            <Route path="/account/details" element={<AccountDetails />} />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-xl text-navy font-semibold">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
