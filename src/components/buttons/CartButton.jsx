'use client';
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAdd2Cart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-100 disabled:text-gray-600"
    >
      {inCart ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default CartButton;
