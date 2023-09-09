import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { Homepage } from "./pages/Homepage";
import { AppLayout } from "./pages/AppLayout";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>CityList</p>} />
          <Route path="cities" element={<p>CityList</p>} />
          <Route path="countries" element={<p>Countires</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
