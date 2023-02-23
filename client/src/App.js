import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// Pages
import Groceries from "./pages/Groceries";
import Kitchen from "./pages/Kitchen";
import Essentials from "./pages/Essentials";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import EssentialDetails from "./pages/EssentialDetails";

// Components
import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="groceries" element={<Groceries />} />
      <Route path="kitchen" element={<Kitchen />} />
      <Route path="essentials" element={<Essentials />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
    </Route>
      <Route path="productdetails/:id" element={<EssentialDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
