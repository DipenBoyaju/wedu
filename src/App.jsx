// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Plan from "./pages/Plan";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
{/*       <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
{/*       <Footer /> */}
    </>
  );
};

export default App;
