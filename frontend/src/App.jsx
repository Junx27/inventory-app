import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Middleware/LoginSession";
import DashboardAdmin from "./Pages/Admin/Dashboard";
import DashboardUser from "./Pages/User/DashboardUser";
import PageNotFound from "./Pages/PageNotFound";
import LandingPage from "./Pages/LandingPage";
import HomeManufacture from "./Pages/Manufacture/HomeManufacture";
import HomeSales from "./Pages/Sales/HomeSales";
import HomeInventory from "./Pages/Inventory/HomeInventory";
import HomePurchase from "./Pages/Purchase/HomePurchase";
import HomeLayanan from "./Pages/Layanan/HomeLayanan";
import AboutInventory from "./Pages/Inventory/AboutInventory";
import FeatureInventory from "./Pages/Inventory/FEatureInventory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* sistem manufacture */}
        <Route path="/sistem-manufacture" element={<HomeManufacture />} />
        {/* sistem sales */}
        <Route path="/sistem-sales" element={<HomeSales />} />
        {/* sistem inventory */}
        <Route path="/sistem-inventory" element={<HomeInventory />} />
        <Route path="/inventory-tentang-website" element={<AboutInventory />} />
        <Route path="/inventory-fitur-webiste" element={<FeatureInventory />} />
        {/* sistem purchase */}
        <Route path="/sistem-purchase" element={<HomePurchase />} />
        {/* sistem layanan */}
        <Route path="/sistem-layanan" element={<HomeLayanan />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={"admin"}>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={"user"}>
              <DashboardUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
