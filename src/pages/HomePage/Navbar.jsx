/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi logout
        localStorage.removeItem("token");
        window.location.reload(); // Refresh halaman setelah logout
        Swal.fire(
          "Logged Out!",
          "You have successfully logged out.",
          "success"
        );
      }
    });
  };
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile(response?.data?.data);
    } catch (error) {
      console.log(error);
      // Jika ada error autentikasi (misal token invalid), redirect ke halaman login
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect ke halaman login
      }
    }
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <div className="sticky z-[999] border bg-white shadow-lg top-0">
      <div className="flex items-center justify-between h-32 text-lg z-[99]">
        <div className="flex-[2] flex items-center justify-center">
          <div className="mr-2 cursor-pointer">
            <img src="/assets/img/coffee-logo.png" alt="Coffee DS Logo" />
          </div>
          <Link to="/" className="text-lg font-bold select-none">
            Coffee-Sb
          </Link>
        </div>
        <div
          className="flex-[6] flex items-stretch justify-center list-none m-5
          cursor-pointer text-base text-slate-500 gap-8"
        >
          <Link to="/" className="hover:text-[#6A4029] hover:font-bold">
            Home
          </Link>
          <Link to="/product" className="hover:text-[#6A4029] hover:font-bold">
            Product
          </Link>
          <li className="hover:text-[#6A4029] hover:font-bold">Your Cart</li>
          <li className="hover:text-[#6A4029] hover:font-bold">History</li>
        </div>
        {isLogin ? (
          <div
            onClick={() => setShow(!show)}
            className="rounded-full h-14 w-14 flex bg-yellow-500 items-center justify-center duration-100 cursor-pointer text-center mx-20"
          ><img className="rounded-full active:scale-110 transition-all ease-in-out duration-300 h-14 w-14 flex" src={profile?.image || "/assets/img/profile2.png"} alt="" />
            {show && (
              <div className="absolute flex flex-col p-2  bg-white gap-3 shadow-md right-28 top-20 rounded-lg">
                <div className="text-sm font-semibold">
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="border-b border-slate-300"></div>
                <div
                  onClick={handleLogout}
                  className="text-sm font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-[3] flex items-center justify-evenly">
            <div className="text-base font-semibold cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
            <div
              className="flex items-center justify-center text-base text-white font-semibold
            cursor-pointer bg-yellow-900 rounded-3xl w-[30%] p-[3%]"
            >
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
