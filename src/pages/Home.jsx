import About from "../components/About";
import Banner from "../components/Banner";
import Built from "../components/Built";
import Client from "../components/Client";
import Pricing from "../components/Pricing";
import Product from "../components/Product";
import Trust from "../components/Trust";
import Workflow from "../components/Workflow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Product />
      <Built />
      <Trust />
      <Client />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
};

export default Home;
