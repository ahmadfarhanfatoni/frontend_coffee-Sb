import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'

import Homepage from "./pages/HomePage";
import SignIn from "./pages/Signin/Signin";
import SignUp from "./pages/Signup/Signup";
import ForgotPw from "./pages/forgotPw/forgot";
import Profile from "./pages/Profile/profil";
import Product from "./pages/product/product";
import SingleProduct from "./pages/singleProduct/singleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPw/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/singleproduct" element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
