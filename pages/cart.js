import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/*HEADING AND PARAGRAPH START*/}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/*HEADING AND PARAGRAPH END*/}

        {/*CART CONTENT START*/}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* CART ITEM START*/}
          <div className=" flex-[2]">
            <div className="text-lg font-bold">Cart Item</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* CART ITEM END*/}

          {/* SUMMARY START*/}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="py-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-md font-medium text-black">
                  ₹ 19 695.00
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and internatinal transaction fees.
              </div>
            </div>

            {/*BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            {/*BUTTON START */}
          </div>
          {/* SUMMARY END*/}
        </div>
        {/*CART CONTENT END*/}



        {/*THIS IS EMPTY SCREEN IMG  */}
        {/*<div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <Image 
                src="/empty-cart.jpg"
                width={300}
                height={300}
                className="w-[300px] md:w-[400px]"
            />

            <span className="text-xl font-bold">
                Your Cart Is Empty
            </span>

            <span className="text-center mt-4">
                Looks like ou have not added anything in your cart yet.
                <br />
                Explore top Categories
            </span>
            <Link 
                href="/"
                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                    Countinue Shopping
            </Link>
        </div>*/}
      </Wrapper>
    </div>
  );
};

export default Cart;
