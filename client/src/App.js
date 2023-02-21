import React from "react";

import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";
 
 // Layouts
 import RootLayout from "./layouts/RootLayout";
 
 // Pages
 import Groceries from "./pages/Groceries";
 import Kitchen from "./pages/Kitchen";
 import Essentials from "./pages/Essentials";
 import Home from "./pages/Home";
 import Recipes from "./pages/Recipes";
 import Contact from "./pages/Contact";

// Components

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route path="" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="groceries" element={<Groceries />} />
      <Route path="kitchen" element={<Kitchen />} />
      <Route path="essentials" element={<Essentials />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
 )

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
