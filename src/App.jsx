import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./component/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Productdetails from "./pages/Productdetails";
import Login from "./pages/Login";
import Registration from "./pages/registration";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<Productdetails />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
