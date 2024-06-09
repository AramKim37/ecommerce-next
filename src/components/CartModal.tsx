"use client";

import Image from "next/image";
import Woman from "../../public/woman.png";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col w-max">
      {cartItems ? <div>Cart is Empty</div> : <div></div>}
    </div>
  );
};

export default CartModal;
