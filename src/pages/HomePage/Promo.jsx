/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Promo = () => {
  const [promo, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/promotion?orderBy=id&sortBy=ASC`
      );
      console.log(response);
      setProduct(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="felx w-2/5 justify-center text-center items-center p-0 gap-8 border-r-2">
        <div className="relative">
          <h1 className="flex flex-col text-center text-2xl font-bold text-red-950 py-10">
            Promo for you
          </h1>
          <span className="">
            {" "}
            Coupons will be update every weeks. <br /> Check them out
          </span>
          <div>
            <div className="flex items-center justify-center gap-8 py-10">
              {promo.map((item, index) => {
                return (
                  <div className="top-20 flex flex-col mt-28 absolute justify-center items-center gap-8 w-[225px] h-[330px] rounded-2xl bg-[#FF6A65] py-24">
                    <div key={index[1]} className="flex flex-col items-center">
                      <img
                        className="rounded-full w-40 h-40 shadow-lg py-1"
                        src={item.image}
                      />
                      <div className="flex flex-col gap-y-2 text-[20px] font-extrabold">
                        {item.name}
                      </div>
                      <div className="flex gap-y-2 text-center text-xs border-b-[1px] border-black border-dashed py-2 font-thin">
                        {item.description}
                      </div>
                      <div className="text-xl font-bold mb-2 mt-2 ">{item.code}</div>
                      <div className="text-xs mb-4 ">{item.endDate}</div>
                    </div>

                    <div className="top-6 flex flex-col -z-[999] absolute justify-between left-16 items-start gap-8 w-4/5 h-100 rounded-3xl bg-black px-4 py-12">
                      <div
                        key={index[2]}
                        className="flex flex-col gap-4 items-center"
                      >
                        <img
                          className="rounded-full shadow-lg shadow-gray-400 w-3/4"
                          src={item.image}
                        />
                        <div className="flex flex-col gap-y-2 font-bold">
                          {item.name}
                        </div>
                        <div className="text-md font-bold ">
                          {item.couponCode}
                        </div>
                        <div className="text-sm ">{item.date}</div>
                      </div>
                    </div>

                    <div className=" flex flex-col -z-[9999] absolute  justify-between left-20 items-start gap-8 w-4/5 h-100 rounded-3xl bg-[#895537] px-2 py-6">
                      <div
                        key={index[3]}
                        className="flex flex-col gap-4 items-center"
                      >
                        <img
                          className="rounded-full shadow-lg shadow-gray-400 w-3/4"
                          src={item.image}
                        />
                        <div className="flex flex-col gap-y-2 font-bold">
                          {item.name}
                        </div>
                        <div className="text-md font-bold ">
                          {item.couponCode}
                        </div>
                        <div className="text-sm ">{item.date}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="justify-center items-center w-[240px] bg-[#6A4029] rounded-2xl text-white py-4 font-bold mb-6 mt-80">
              Apply Coupon
            </button>
            <div className=" flex-col gap-[5px] text-[#4F5665] text-left ml-5 list-none py-10">
              <h1 className="font-bold mb-2"> Terms and coundition</h1>
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 grt 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
