const Title = ({ main, sub }) => {
  return (
    <div className="bg-[#FFD7EF]">
      <div className="container mx-auto lg:container xl:container text-center lg:px-40 relative lg:pb-32 lg:py-32 py-16 z-10">
        <h1 className="text-2xl lg:text-[50px]">{main}</h1>
        <p className="pt-2 lg:pt-6">{sub}</p>
      </div>
      <div className="absolute -mt-5 lg:-mt-32 left-0 w-full h-1/3 bg-[#FFD7EF] transform skew-y-[-6deg] lg:skew-y-[-3deg] z-0"></div>
    </div>
  );
};

export default Title;
