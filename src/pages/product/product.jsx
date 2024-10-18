import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../footer";
import Promo from "../HomePage/Promo";
import CartProduct from "../HomePage/CartProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/product?orderBy=id&sortBy=ASC`
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
    <div>
      <Navbar />
      <div className="w-full flex flex-row">
        <Promo />
        <div className="flex flex-col w-full h-2/3 justify-center items-center mt-5 gap-10">
          <ul className="flex items-center text-md text-gray-500 gap-20">
            <li className="hover:text-orange-950 hover:font-bold hover:border-b-2 hover:border-orange-950 cursor-pointer pb-1">
              Favorite Product
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:border-b-2 hover:border-orange-950 cursor-pointer pb-1">
              Coffee
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:border-b-2 hover:border-orange-950 cursor-pointer pb-1">
              Non Coffee
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:border-b-2 hover:border-orange-950 cursor-pointer pb-1">
              Foods
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:border-b-2 hover:border-orange-950 cursor-pointer pb-1">
              Add-on
            </li>
          </ul>
          <div className="grid grid-cols-4 gap-4 p-10 text-center font-bold text-xl">
            {product.map((item, index) => {
              return <CartProduct item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
