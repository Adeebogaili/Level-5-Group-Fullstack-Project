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
 import Footer from "./components/Footer";

// Components

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />}/>
      <Route path="Groceries" element={<Groceries />}/>
      <Route path="groceries" element={<Groceries />}/>
      <Route path="kitchen" element={<Kitchen />}/>
      <Route path="essentials" element={<Essentials />}/>
    </Route>
  )
 )

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
