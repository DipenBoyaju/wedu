import reviews from "../assets/data/review";

const Client = () => {
  return (
    <section className="clients lg:py-36 py-16">
      <div className="container mx-auto lg:container xl:container lg:px-40">
        <div className="client-content px-6 lg:px-0">
          <div className="title">
            <h2 className="text-2xl lg:text-[38px] font-normal pr-32 lg:pr-0">
              What Our Clients Say
            </h2>
          </div>
          <div className="testimonial lg:flex gap-12 pt-12 lg:pt-24 px-4 lg:px-0">
            {reviews.map((item) => (
              <div
                className="testimonial-list border-2 border-black rounded-2xl mb-20 last:mb-0 lg:mb-auto"
                key={item.id}
              >
                <div className="circle flex gap-2 absolute p-3">
                  <div className="bg-black w-2 h-2 rounded-full"></div>
                  <div className="bg-black w-2 h-2 rounded-full"></div>
                  <div className="bg-black w-2 h-2 rounded-full"></div>
                </div>
                <div className="bg-[var(--primary-color)] w-full h-8 rounded-t-2xl border-b-2 border-black"></div>
                <div className="review p-8">
                  <p className="text-[16px]">{item.details}</p>
                  <div className="flex items-center justify-between">
                    <img
                      src={item.image}
                      alt=""
                      className="-ml-14 -mb-[84px]"
                    />
                    <div className="identity pt-8">
                      <p className="font-bold text-right">
                        {item.name},<br />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
