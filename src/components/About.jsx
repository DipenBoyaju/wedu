const About = () => {
  return (
    <section className="about bg-[var(--primary-color)] lg:py-[10rem] py-16 px-6 lg-px-0">
      <div className="container mx-auto lg:container xl:container lg:px-40 z-10 relative">
        <div className="about-info lg:flex items-center gap-16">
          <div className="title w-270 lg:flex-1">
            <h2 className="text-2xl lg:text-[38px] font-normal pr-16 lg:pr-0 lg:leading-[49.4px]">
              With the Right Software, Great
              <br className="lg:block hidden" /> Things Can Happen
            </h2>
          </div>
          <div className="details lg:flex-1">
            <p className="text-[16px] pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              repellendus dolore reprehenderit, dolorem quisquam maiores!
              Voluptatem quidem consequatur quia amet quae dicta reiciendis
              molestiae numquam nisi! Ducimus iure veritatis eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
