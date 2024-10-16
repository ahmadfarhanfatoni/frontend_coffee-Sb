import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // State untuk loading

  const register = async () => {
    setLoading(true); // Mulai loading saat register
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/auth/register`, {
        email,
        password,
        phone,
      });
      if (response.status === 201) {
        // Tampilkan SweetAlert ketika registrasi sukses
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
        }).then(() => {
          // Redirect setelah alert ditutup
          navigate("/login");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error?.response?.data?.msg || "Please try again later.",
      });
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  return (
    <div className="w-full h-full mx-auto">
      <div className="header-container flex flex-col lg:flex-row w-full">
        <img
          className="hidden lg:block lg:w-[682px] lg:h-[1100px] object-cover"
          src="/assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png"
          alt="Login Illustration"
        />

        <div className="loginPage flex-1 px-6 lg:px-0">
          <div className="header-login flex justify-between items-center py-6 lg:p-14">
            <div className="logo flex items-center font-semibold">
              <img
                className="w-[30px] h-[33px]"
                src="/assets/img/coffee-logo.png"
                alt="Coffee Logo"
              />
              <p className="text-lg font-bold ml-2">Coffee-Sb</p>
            </div>
            <div className="btn-signup flex bg-yellow-500 rounded-full h-[40px] w-[120px] items-center justify-center text-amber-900 font-semibold text-base cursor-pointer active:bg-yellow-600 select-none">
              <p>
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
          <div className="text-center font-semibold text-3xl leading-10 mt-6 lg:mt-12 text-amber-900">
            <p>Sign Up</p>
          </div>
          <form
            className="form-login flex flex-col py-5 lg:px-20 justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              register();
            }}
          >
            <label
              className="font-semibold text-xl leading-6 mb-3 lg:mb-5 text-slate-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 lg:py-6 text-lg font-medium border border-black rounded-3xl mb-3 lg:mb-5"
              type="email"
              placeholder="Enter your email address"
              required
            />
            <label
              className="font-semibold text-xl leading-6 mb-3 lg:mb-5 text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="px-6 py-4 lg:py-6 text-lg font-medium border border-black rounded-3xl mb-3 lg:mb-5"
              type="password"
              placeholder="Enter your password"
              required
            />
            <label
              className="font-semibold text-xl leading-6 mb-3 lg:mb-5 text-slate-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="px-6 py-4 lg:py-6 text-lg font-medium border border-black rounded-3xl mb-3 lg:mb-5"
              type="number"
              placeholder="Enter your phone number"
              required
            />

            <button
              type="submit"
              className={`flex justify-center items-center mt-6 lg:mt-[5%] border bg-yellow-500 h-14 lg:h-20 shadow-xl shadow-[rgba(255, 186, 51, 0.4)] rounded-3xl w-full cursor-pointer font-bold text-lg lg:text-xl active:bg-yellow-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable tombol saat loading
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-t-yellow-900 border-yellow-500"></div>
              ) : (
                <p>Sign Up</p>
              )}
            </button>
            <div className="flex justify-center items-center mt-6 lg:mt-[5%] border bg-white h-14 lg:h-20 shadow-xl shadow-[rgba(255, 186, 51, 0.4)] rounded-3xl w-full cursor-pointer font-bold text-lg lg:text-xl active:bg-slate-300">
              <img src="assets/img/googleLogo.png" alt="Google Icon" />
              <p className="ml-3 lg:ml-5">Sign Up with Google</p>
            </div>
          </form>
        </div>
      </div>
      <div className="member-card flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-[73%] p-8 lg:p-20 w-full lg:w-[80%] h-auto lg:h-60 bg-white border-none lg:shadow-2xl lg:rounded-xl lg:absolute z-[2] inset-0 lg:mx-auto">
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

export default SignUp;