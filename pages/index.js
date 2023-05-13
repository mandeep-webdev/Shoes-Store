import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[40px] mb-5 font-semibold leading-tight">
            Comfort is everything
          </div>
          <div className="text-md md:text-xl">
            Find the best shoes for comfort in your daily activities.
          </div>
          <button
            type="button"
            class="text-white mt-6 w-50  bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            Get Started
          </button>
        </div>

        {/* heading and paragaph end */}

        {/* products grid start */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
          {/* <ProductCard  />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi('/api/products?populate=*');
  return {
    props: {
      products,
    },
  };
}
