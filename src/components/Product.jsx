import products from "../assets/data/products.js";

const Product = () => {
  return (
    <section className="product lg:py-[6rem] py-16 px-6 lg:px-0">
      <div className="container mx-auto lg:container xl:container lg:px-40">
        <div className="product-title">
          <div className="title">
            <h2 className="text-2xl lg:text-[38px] font-normal">
              What We Offer
            </h2>
          </div>
          <div className="sub-info">
            <p className="text-[16px] pt-4 lg:w-1/2 font-light lg:pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptas quasi temporibus nisi ab, tempore sequi corrupti,
              pariatur recusandae distinctio dolore cum eaque repellat sapiente
              officiis? Voluptatem ducimus ea veritatis.
            </p>
          </div>
        </div>
        <div className="product-items pt-16 lg:pt-24">
          <div className="products-list lg:flex gap-4 ">
            {products.map((item) => (
              <div className="product-items lg:w-fit py-8" key={item.id}>
                <div className="product-image w-1/2 lg:w-auto">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg border-black border-2"
                  />
                </div>
                <div className="product-details pt-4 lg:pt-12">
                  <h3 className="text-[18px] lg:text-[22px] font-bold pr-8">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-light pt-4">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
