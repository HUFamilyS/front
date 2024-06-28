import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Header/Footer";
import Main from "./component/main/main";
import Loading from "./component/loading/loading";
import MY from "./component/My/myPage";
import SignUp from "./component/My/signUp";
import Recipe from "./component/recipe/page/Recmain";
import Login from "./component/My/loginPage";
import MyInformation from "./component/My/myInformation";

import "../src/App.css";
import Purchase from "./component/purchase/purchase";
import MakeProom from "./component/purchase/makeProom";
import MakeForm from "./component/purchase/makeForm";
import View from "./component/recipe/page/Recview";
import Write from "./component/recipe/page/Recwrite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="mobile">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/mypage" element={<MY />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myinformation" element={<MyInformation />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/purchase/:id" element={<MakeProom />} />
            <Route path="/purchase/form" element={<MakeForm />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/view" element={<View />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
