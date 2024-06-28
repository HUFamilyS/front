import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Header/Footer";
import Main from "./component/main/main";
import Loading from "./component/loading/loading";

import "../src/App.css";
import Purchase from "./component/purchase/purchase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="mobile">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
