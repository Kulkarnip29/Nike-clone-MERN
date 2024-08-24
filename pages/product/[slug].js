import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import ProductCard from "@/components/ProductCard";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10gap-[50px] lg:gap-[100px]">
          {/*Left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/*Left column end */}

          {/*Right column start */}
          <div className="flex-[1] py-3">
            {/*PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/*PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Men&aops;s Golf Shoes
            </div>

            {/*PRODUCT PRICE */}
            <div className="text-lg font-semibold">MRP : ₹ 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of all taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {"(Also includes all applicables)"}
            </div>

            {/*PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/*HEADING START*/}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/*HEADING END */}

              {/*SIZING START */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/*SIZING END */}

              {/*SHOW ERROR START */}
              <div className="text-red-600 mt-1">Size Selectio is Required</div>

              {/*SHOW ERROR START */}
            </div>
            {/*PRODUCT SIZE RANGE END */}

            {/*ADD TO CART BUTTON START*/}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Carts
            </button>
            {/*ADD TO CART BUTTON END*/}

            {/*WHISHLIST BUTTON START*/}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95  flex items-center justify-center gap-2  hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/*WHISHLIST BUTTON END*/}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>

              <div className="text-md mb-5">
                <p>Inspired by the original that debuted in 1985, the Air Jordan 1
                Low offers a clean, classic look that's familiar yet always
                fresh. With an iconic design that pairs perfectly with any 'fit,
                these kicks ensure you'll always be on point.</p> 
              </div>
              <div className="text-md mb-5">
                <p>Inspired by the original that debuted in 1985, the Air Jordan 1
                Low offers a clean, classic look that's familiar yet always
                fresh. With an iconic design that pairs perfectly with any 'fit,
                these kicks ensure you'll always be on point.</p> 
              </div>
            </div>
          </div>
          {/*Right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
