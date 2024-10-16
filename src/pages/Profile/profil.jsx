/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Footer from "../footer";
import Navbar from "../HomePage/Navbar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [editContacts, setEditContacts] = useState(false);
  const [, setEditPicture] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const getProfile = async () => {
    try {
      // Jika tidak ada token, redirect ke halaman login
      if (!token) {
        window.location.href = "/"; // Redirect ke halaman login
        return;
      }

      const response = await axios.get(`${process.env.REACT_APP_HOST}/user/profile`, {
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

  const handleEditPicture = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will change this picture!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      setEditPicture(true);
    }
  };
  const handleEditContacts = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will change this contacts!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      setEditContacts(true);
    }
  };
  const handleEditDetails = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will change this information!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      setEditDetails(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-center gap-12 px-24 py-16">
          <div className="w-1/4 shadow-xl h-[358px] flex flex-col items-center justify-center gap-2 rounded-md">
            <div className="relative flex flex-col items-center">
              <div className="relative w-32 h-32">
                <img
                  src={profile?.image || "/assets/img/profile2.png"}
                  alt="user"
                  className="shadow-xl shadow-slate-300 w-32 h-32 rounded-full object-cover mb-6"
                />
                <div className="flex items-center justify-center bg-amber-900 w-9 h-9 rounded-full border-2 border-slate-100 text-white absolute bottom-0 right-0 transform translate-x-1 translate-y-1">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="cursor-pointer active:scale-95 transition duration-300"
                    onClick={handleEditPicture} // panggil fungsi
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">{profile?.username}</div>
              <div className="text-xs text-slate-500">{profile?.email}</div>
            </div>
            <div className="text-sm text-slate-700 mt-6 ">
              Has been ordered 15 products
            </div>
          </div>

          <div className="w-3/4 p-8 gap-4 h-[358px] flex flex-col rounded-md shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-xl text-slate-500 font-bold px-2">
                Contacts
              </div>
              <div className="bg-amber-900 w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-100 text-white">
                <FontAwesomeIcon
                  icon={faPen}
                  className="cursor-pointer active:scale-95 transition duration-300"
                  onClick={handleEditContacts}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-slate-400 font-bold flex flex-col p-2">
                Email Address :
                <input
                  defaultValue={profile?.email}
                  type="email"
                  className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                  readOnly={!editContacts} // di tolak edit kalau belum tekan tombol edit
                />
              </div>
              <div className="text-slate-400 font-bold flex flex-col p-2">
                Number Phone :
                <input
                  defaultValue={profile?.phone}
                  type="number"
                  className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                  readOnly={!editContacts}
                />
              </div>
              <div className="py-10 text-slate-400 font-bold flex flex-col p-2">
                Delivery Address :
                <input
                  defaultValue={profile?.user_address}
                  type="text"
                  className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                  readOnly={!editContacts}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start gap-16 px-24 py-14">
          <div className="w-[950px] p-8 gap-4 h-[418px] flex flex-col rounded-md shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-xl text-slate-500 font-bold px-2">
                Details
              </div>
              <div className="bg-amber-900 w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-100 text-white">
                <FontAwesomeIcon
                  icon={faPen}
                  className="cursor-pointer active:scale-95 transition duration-300"
                  onClick={handleEditDetails}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="">
                <div className="text-slate-400 font-bold flex flex-col p-2">
                  Display Name :
                  <input
                    defaultValue={profile?.e || ""} 
                    type="text"
                    className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                    readOnly={!editDetails} //kalo gak di tekan icon cuma read
                  />
                </div>
                <div className="text-slate-400 font-bold flex flex-col p-2 mt-5">
                  First Name :
                  <input
                    defaultValue={profile?.e || ""} 
                    type="Text"
                    className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                    readOnly={!editDetails} //kalo gak di tekan icon cuma read
                  />
                </div>
                <div className="text-slate-400 font-bold flex flex-col p-2 mt-5">
                  Last Name :
                  <input
                    defaultValue={profile?.e || ""}
                    type="text"
                    className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                    readOnly={!editDetails} //kalo gak di tekan icon cuma read
                  />
                </div>
              </div>
              <div className="text-slate-400 font-bold flex flex-col p-2">
                DD/MM/YY :
                <input
                  defaultValue={profile?.e || "DD/MM/YY"} 
                  type="date"
                  className="border-b border-slate-800 text-md text-black font-medium p-2 outline-none cursor-pointer"
                  readOnly={!editDetails} //kalo gak di tekan icon cuma read
                />
                <div className="grid grid-col items-center mt-10 gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="peer hidden" //input ini di sembunyikan apabila tidak dipilih
                      disabled={!editDetails} //dinonaktifkan ketika di mode no edit
                    />
                    <div className="w-5 h-5 rounded-full border-[3px] border-gray-300 flex items-center justify-center peer-checked:border-orange-900 peer-checked:bg-amber-400">
                      <div className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-white"></div>
                    </div>
                    <span className="ml-2 text-gray-700 peer-checked:text-orange-900">
                      Male
                    </span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="peer hidden"
                      disabled={!editDetails} //dinonaktifkan ketika di mode no edit
                    />
                    <div className="w-5 h-5 rounded-full border-[3px] border-gray-300 flex items-center justify-center peer-checked:border-orange-900 peer-checked:bg-amber-400">
                      <div className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-white"></div>
                    </div>
                    <span className="ml-2 text-gray-700 peer-checked:text-orange-900">
                      Female
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grow items-center justify-start py-24 h-16 w-80">
            <button className="bg-[#6A4029] text-white shadow-[#6A4029A6] shadow-md font-bold w-[330px] h-[60px] rounded-3xl mt-4 cursor-pointer active:scale-95 transition duration-300">
              Save Change
            </button>
            <button className="bg-[#FFBA33] text-amber-900  shadow-md font-bold w-[330px] h-[60px] rounded-3xl mt-4 cursor-pointer active:scale-95 transition duration-300">
              Cancel
            </button>
            <div>
              <button className=" text-amber-900 text-start pl-5 border-2 font-bold w-[330px] h-[60px] rounded-3xl mt-4 cursor-pointer active:scale-95 transition duration-300">
                <img
                  src="/assets/img/chevron-left.png"
                  alt=""
                  className="absolute w-6 h-6  left-[91%]"
                />
                Edit Password
              </button>
              <button className=" text-amber-900 text-start pl-5 border-2 font-bold w-[330px] h-[60px] rounded-3xl mt-4 cursor-pointer active:scale-95 transition duration-300">
                <img
                  src="/assets/img/chevron-left.png"
                  alt=""
                  className="absolute w-6 h-6  left-[91%]"
                />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
