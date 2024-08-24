import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Image from "next/image";
const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />

            <div className="text-2xl font-bold">Payment failed!</div>
            <div className="text-base mt-5">
              For any product related query, drop an email to
            </div>
            <div className="underline">shoeshopcontact@shop.com</div>

            <Link href="/" className="font-bold mt-5">
             Continue Shopping 
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
