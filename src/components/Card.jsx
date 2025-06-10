import React, {  useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'

function Card({ category, name, price, imgSrc, obj }) {
  const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    isInCart,
    getQuantity,
  } = useContext(CartContext);

  const inCart = isInCart(name);
  const quantity = getQuantity(name);

  function add() {
    addToCart({ ...obj, quantity: 1 });
  }

  function increment() {
    incrementQuantity(name);
  }

  function decrement() {
    if (quantity === 1) {
      removeFromCart(name);
    } else {
      decrementQuantity(name);
    }
  }

  const withoutBorder = "w-[250px] h-[240px] rounded-2xl";
  const withBorder = "w-[250px] h-[240px] rounded-2xl border-2 border-[#C73B0F]";

  return (
    <div className="flex flex-col gap-9 sm:mb-12">
      <div className="relative">
        <img src={imgSrc} alt={name} className={inCart ? withBorder : withoutBorder} />

        {inCart ? (
          <button className="absolute text-white bottom-[-25px] left-14 flex flex-row items-center gap-6 pt-2 pb-2 pr-4 pl-4 rounded-4xl cursor-pointer bg-[#C73B0F]">
            <img
              src="../../public/assets/images/icon-decrement-quantity.svg"
              onClick={decrement}
              alt="decrement-icon"
              className="border-2 border-white pt-2 pb-2 pr-1 pl-1 rounded-full"
            />
            {quantity}
            <img
              src="../../public/assets/images/icon-increment-quantity.svg"
              onClick={increment}
              alt="increment-icon"
              className="border-2 border-white p-1 rounded-full"
            />
          </button>
        ) : (
          <button
            onClick={add}
            className="absolute bottom-[-25px] left-14  bg-white flex flex-row gap-1 pt-2 pb-2 pr-4 pl-4 rounded-4xl cursor-pointer border border-[#AD8A85]  hover:border-[#C73B0F]"
          >
            <img
              src="../../public/assets/images/icon-add-to-cart.svg"
              alt="icon-add-to-cart"
              className="w-5 h-5"
            />
            <span className="text-[#260F08] hover:text-[#C73B0F] font-semibold">
              Add to Cart
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[#87635A]">{category}</span>
        <span className="text-[#260F08] font-bold">{name}</span>
        <span className="text-[#C73B0F] font-semibold">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Card;
