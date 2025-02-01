import "./App.css";
import { assets } from "./assets/assets";
import { CopyRight, Fooder } from "./Components/Fooder/Fooder";
import { Form } from "./Components/Form/Form";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { Process } from "./Components/Process/Process";
import { Product } from "./Components/Product/Product";
import { Testimonials } from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <img
        src={assets.bg_pink_img}
        alt=""
        className="fixed top-0 -z-10 left-0  bg-center bg-no-repeat w-full h-[50vh] mx-auto opacity-95  "
      />
      <img
        src={assets.bg_green_img}
        alt=""
        className="fixed -bottom-24 -z-10  left-0  bg-center bg-no-repeat w-full h-[50vh] mx-auto opacity-95  "
      />

      <Navbar />
      <Landing />
      <Process />
      <Form />
      <Product />
      <Testimonials />
      <Fooder />
      <CopyRight />
    </>
  );
}

export default App;
