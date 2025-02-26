// Integro il sistema di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListProduct from "./pages/ListProduct";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Definiamo una rotta genitore, */}
        <Route element={<DefaultLayout />}>

          {/* Definiamo le rotte figlie */}
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ListProduct" element={<ListProduct />} />

        </Route>
      </Routes>

    </BrowserRouter>
  );

}

export default App
