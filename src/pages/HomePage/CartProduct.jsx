import React from 'react'
import { formatCurrency } from '../../Helpers/formatter';
import { Link } from 'react-router-dom';

const CartProduct = ({item}) => {
  return (
    <Link to={`/product/${item?.id}`}>
        <div className='shadow-xl bg-white rounded-3xl flex items-center justify-center flex-col py-8 gap-6 cursor-pointer hover:scale-105 transition-all ease-out hover:border-2 hover:border-orange-900'>
            <img src={item?.image} alt={item?.name} className='w-full rounded-full' />
            <div className="text-md">{item?.name}</div>
            <div className="text-md font-bold text-lg text-orange-900">{formatCurrency(item?.price)}</div>
        </div>
    </Link>
  )
}

export default CartProduct