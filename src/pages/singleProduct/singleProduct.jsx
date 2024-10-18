import React, { useEffect, useState } from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { formatCurrency } from '../../Helpers/formatter' 
import { RiLoader2Fill } from 'react-icons/ri' 


const SingleProduct = () => {
    const params = useParams()
    const id =params?.id
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getProductDetails = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/product/${id}`)
            setProduct(response?.data?.data)
        } catch (error) {
            console.log({error});
        }
        setIsLoading(false)
    }
    useEffect(() => {
        getProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
  return (
    <div>
        <Navbar/>
        {
            isLoading ? <div className='w-full flex items-center justify-center'><RiLoader2Fill className='h-16 w-16 text-center animate-spin'/></div> :
                <div className=" bg-[#EFEEEE]  ">
                    <div className="grid grid-cols-2 p-12 w-full ">
                        <div className=" flex flex-col items-center py-12 justify-between gap-8">
                            <img className='rounded-full w-[300px] h-[300px]' src={product?.image} alt={product?.name} />
                            <div className="flex flex-col gap-4">
                                <label className='font-bold text-5xl'>{product?.name}</label>
                                <label className='font-bold text-3xl text-orange-900'>{formatCurrency(product?.price)}</label>
                            </div>
                        </div>
                        <div className=" bg-white flex flex-col items-center p-16 justify-between rounded-3xl">
                            <div className="flex flex-col text-left  gap-16 ">
                                <div className="flex flex-col gap-8 text-xl">
                                    <p>Delivery only on Monday to <br/> friday at 1 - 7 pm</p>
                                    <p>{product?.description}</p>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center gap-4">
                                    <label className='font-bold text-xl' htmlFor="">Choose a size</label>
                                    <div className="flex flex-row gap-12">
                                        <div className="flex items-center justify-center w-[60px] h-[60px] text-2xl font-bold rounded-full bg-[#FFBA33]">R</div>
                                        <div className="flex items-center justify-center w-[60px] h-[60px] text-2xl font-bold rounded-full bg-[#FFBA33]">L</div>
                                        <div className="flex items-center justify-center w-[60px] h-[60px] text-2xl font-bold rounded-full bg-[#FFBA33]">XL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-4 items-center py-8">
                            <button className='w-[388px] h-[85px] bg-orange-950 rounded-3xl text-white font-bold text-xl'>Add to Cart</button>
                            <button className='w-[388px] h-[85px] bg-[#FFBA33] rounded-3xl font-bold text-xl '>Ask a Staff</button>
                        </div>
                        <div className=" flex flex-col justify-between py-8">
                            <div className="flex flex-col items-center text-center gap-8">
                                <label className='font-bold text-xl' htmlFor="">Choose Delivery Methods</label>
                                <div className="flex flex-row gap-8">
                                    <div className="flex items-center justify-center w-[110px] h-[49px] bg-white text-sm border-1 font-bold rounded-xl ">Dine in</div>
                                    <div className="flex items-center justify-center w-[110px] h-[49px] bg-white text-sm border-1 font-bold rounded-xl ">Door Delivery</div>
                                    <div className="flex items-center justify-center w-[110px] h-[49px] bg-white text-sm border-1 font-bold rounded-xl ">Pick up</div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <label className='text-lg' htmlFor="">Set time :</label>
                                    <input className='w-[292.01px] outline-none bg-[#EFEEEE] border-b-2 border-[#9F9F9F]' type="text" placeholder='Enter the time you’ll arrived' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-56 grid grid-cols-2 gap-8 relative items-center top-20 ">
                        <div className="flex flex-row items-center justify-between bg-white rounded-3xl shadow-lg p-8">
                            <div className="flex flex-row gap-8 items-center justify-center">
                                <img className='flex items-center justify-center bg-orange-500 rounded-full w-[100px] h-[100px] ' src={product?.image} alt="img" />
                                <div className="flex flex-col gap-2 items-start">
                                    <label className='font-bold text-2xl' htmlFor="">COLD BREW</label>
                                    <label htmlFor="">x1 (Large)</label>
                                    <label htmlFor="">x1 (Regular)</label>
                                </div>
                            </div>
                            <div className="flex flex-row gap-8 items-center justify-center">
                                <div className="flex items-center justify-center bg-orange-500 rounded-full font-bold text-lg w-[40px] h-[40px] ">-</div>
                                <label className='font-bold text-2xl' htmlFor="">2</label>
                                <div className="flex items-center justify-center bg-orange-500 rounded-full font-bold text-lg w-[40px] h-[40px] ">+</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-full w-[250px] rounded-3xl shadow-lg bg-orange-500 font-bold text-2xl">CHECKOUT</div>
                    </div>
                </div>
        }
        <Footer/>
    </div>
  )
}

export default SingleProduct
