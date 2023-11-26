import workflow from "../assets/images/workflow.png";

const Workflow = () => {
  return (
    <section className="workflow lg:pt-40 pt-32">
      <div className="container mx-auto lg:container xl:container lg:px-40">
        <div className="workflow-content text-center">
          <div className="title">
            <h2 className="text-2xl px-8 py-8 lg:text-[38px] lg:py-12 lg:px-16">
              Get Ready to Maximize Your Productivity With Our Workflow
              Solutions
            </h2>
            <button className="bg-black text-white text-[16px] font-SpaceGrotesk border-[1px] border-black p-2 px-4 rounded-md font-bold hover:bg-[var(--primary-color)] hover:font-bold hover:text-black transition-all ease-in-out delay-75">
              Get Started
            </button>
            <img src={workflow} alt="" className="pt-8 -mb-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
