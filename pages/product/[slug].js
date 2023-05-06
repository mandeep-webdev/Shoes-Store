import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}

          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Product Title
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">Product Subtitle</div>
            {/* PRODUCT PRICE */}
            <div className=" text-lg font-semibold ">
              MRP : &#8377;2300
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                  SELECT SIZE (UK Size)
                </div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}
              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-4 gap-3">
                <div className="border rounded-full h-16 w-16 mt-2 text-black bg-gray-100 text-center py-3 font-bold hover:border-black cursor-pointer hover:bg-black hover:text-white">
                  6
                </div>
                <div className="border rounded-full mt-2 h-16 w-16 text-black bg-gray-100 text-center py-3 font-bold hover:border-black cursor-pointer hover:bg-black hover:text-white">
                  7
                </div>
                <div className="border rounded-full mt-2 h-16 w-16 text-black bg-gray-100 text-center py-3 font-bold hover:border-black cursor-pointer hover:bg-black hover:text-white">
                  8
                </div>
                <div className="border rounded-full mt-2 h-16 w-16 text-black bg-gray-100 text-center py-3 font-bold hover:border-black cursor-pointer hover:bg-black hover:text-white">
                  9
                </div>
                <div className="border rounded-full mt-2 h-16 w-16 text-black bg-gray-100 text-center py-3 font-bold hover:border-black cursor-pointer hover:bg-black hover:text-white">
                  10
                </div>
                <div className="border rounded-full cursor-not-allowed mt-2 h-16 w-16 text-center py-3 font-bold bg-black/[0.1] opacity-40">
                  11
                </div>
              </div>
              {/* SIZE END */}
              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-2">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                A pair of round-toe white sneakers, has regular styling, lace-up
                detail Synthetic Leather upper Cushioned footbed Textured and
                patterned outsole Warranty: 15 Days Warranty provided by
                brand/manufacturer
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
