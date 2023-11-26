import About from "../components/About";
import Banner from "../components/Banner";
import Built from "../components/Built";
import Client from "../components/Client";
import Pricing from "../components/Pricing";
import Product from "../components/Product";
import Trust from "../components/Trust";
import Workflow from "../components/Workflow";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Product />
      <Built />
      <Trust />
      <Client />
      <Pricing />
      <Workflow />
    </div>
  );
};

export default Home;
