import axios from "axios";
import Footer from "../footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Tambahkan SweetAlert

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State untuk loading

  const login = async () => {
    setLoading(true); // Mulai loading saat klik login
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/auth/login`, {
        email,
        password,
      });
      console.log("Login Success");
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data?.msg || "Login failed! Please try again.",
      });
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  return (
    <div className="w-full h-full mx-auto ">
      <div className="header-container flex flex-col lg:flex-row w-full">
        <img
          className="hidden lg:block w-[682px] h-[1100px] object-cover"
          src="/assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png"
          alt="Login Illustration"
        />

        <div className="loginPage flex-1 px-6 lg:px-0">
          <div className="header-login flex justify-between items-center py-6 lg:p-14">
            <div className="logo flex items-center font-semibold">
              <img
                className="w-[30px] h-[33px]"
                src="/assets/img/coffee-logo.png"
                alt="Logo"
              />
              <p className="text-lg font-bold ml-2">Coffee-Sb</p>
            </div>
            <div className="btn-signup flex bg-yellow-500 rounded-full h-[40px] w-[120px] items-center justify-center text-amber-900 font-semibold text-base cursor-pointer active:bg-yellow-600 select-none">
              <p>
                <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
          <div className="text-center font-semibold text-3xl leading-10 mt-6 lg:mt-12 text-amber-900">
            <p>Sign In</p>
          </div>
          <form
            className="form-login flex flex-col py-5 lg:px-20 justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <label
              className="font-semibold text-xl leading-6 mb-3 lg:mb-5 text-slate-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 lg:py-6 text-lg font-medium border border-black rounded-3xl mb-3 lg:mb-5"
              type="text"
              placeholder="Enter your email address"
              id="email"
              required
            />
            <label
              className="font-semibold text-xl leading-6 mb-3 lg:mb-5 text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="px-6 py-4 lg:py-6 text-lg font-medium border border-black rounded-3xl mb-3 lg:mb-5"
              type="password"
              placeholder="Enter your password"
              id="password"
              required
            />
            <Link to="/forgotpassword" className="font-bold text-base lg:text-xl leading-6 cursor-pointer active:text-amber-700 select-none underline mt-2 lg:mt-5">Forgot Password?</Link>
            <button
              type="submit"
              className={`flex justify-center items-center mt-6 lg:mt-[10%] border bg-yellow-500 h-14 lg:h-20 shadow-xl shadow-[rgba(255, 186, 51, 0.4)] rounded-3xl w-full cursor-pointer font-bold text-lg lg:text-xl active:bg-yellow-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable tombol saat loading
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-t-yellow-900 border-yellow-500"></div>
              ) : (
                <p>Login</p>
              )}
            </button>
            <div className="flex justify-center items-center mt-6 lg:mt-[10%] border bg-white h-14 lg:h-20 shadow-xl shadow-[rgba(255, 186, 51, 0.4)] rounded-3xl w-full cursor-pointer font-bold text-lg lg:text-xl active:bg-slate-300">
              <img src="/assets/img/googleLogo.png" alt="Google Icon" />
              <p className="ml-3 lg:ml-5">Login with Google</p>
            </div>
          </form>
        </div>
      </div>
      <div className="member-card flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-[73%] p-8 lg:p-16 w-full lg:w-[80%] h-auto lg:h-60 bg-white border-none lg:shadow-2xl lg:rounded-xl lg:absolute z-[2] inset-0 lg:mx-auto">
        <div className="text-center lg:text-left flex flex-col mb-6 lg:mb-0 lg:absolute">
          <p className="font-bold text-2xl lg:text-3xl leading-10">
            Get your member <br className="hidden lg:block" /> card now!
          </p>
          <p className="font-normal text-base lg:text-lg leading-6 mt-4 lg:mt-9">
            Let&apos;s join with our member and enjoy the deals
          </p>
        </div>
        <div className="btn-member flex h-12 lg:h-14 items-center justify-center bg-yellow-500 rounded-2xl p-4 lg:w-[200px] cursor-pointer font-bold text-base active:bg-yellow-600 lg:ml-auto">
          <p>Create now</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;