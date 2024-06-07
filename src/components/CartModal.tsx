"use client";

import Image from "next/image";
import Woman from "../../public/woman.png";

const CartModal = () => {
  return (
    <div className="absolute top-10 -left-20 border-2 p-2 w-[300px]">
      <h1>Shopping Cart</h1>
      <div className="flex">
        <Image src={Woman} width={64} height={64} alt="" />
        <div className="flex">
          <div>
            <h1>Product Name</h1>
            <p>Available</p>
            <p>Qty 1</p>
          </div>
          <div>
            <p>$30.5</p>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
