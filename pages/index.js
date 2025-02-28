import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading And Paragraph section Start*/}
        <div className="text-center max-w-[800px] mx-auto my-[50px md:my-[80px]">
          <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Cushion for Your Miles
          </div>

          <div className="text-md md:text-xl">
            A Lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended streches of
            running.
          </div>
        </div>
        {/* Heading And Paragraph section end*/}

        {/* Product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Product grid end */}
      </Wrapper>
    </main>
  );
}
