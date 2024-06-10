"use client";

import Image from "next/image";
import Woman from "../../public/woman.png";

const CartModal = () => {
  const cartItems = false;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col w-max">
      {cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src={Woman}
            width={72}
            height={96}
            alt=""
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div>
              <div>
                <h3>Product Name</h3>
                <div>$49</div>
              </div>
              <div>available</div>
            </div>
            <div>
              <span>Qty. 2</span>
              <span>Remove</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
