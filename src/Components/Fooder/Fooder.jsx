import { assets, socialMediaIcon } from "../../assets/assets";
import { motion } from "motion/react";

export const Fooder = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="w-full bg-black/80 flex flex-col lg:flex-row gap-5 mt-10 justify-between  items-center mx-auto px-10 ">
      <div className=" flex items-center justify-center flex-col md:flex-row gap-5 ">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          src={assets.gif}
          alt=""
          className="w-[300px]"
        />

        <div className="flex justify-center flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-white ml-4 my-2">
            Ram’s Technology pvt..
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-ls text-white ml-4">
            Big Temple near
          </motion.h5>
          <motion.h6
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-ls text-white ml-4">
            Thanjavur. 616616
          </motion.h6>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-ls text-white  ml-4">
            +91 6380185040
          </motion.p>
          <div className=" flex gap-1">
            {socialMediaIcon.map(({ icon, link }, index) => (
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                src={icon}
                alt=""
                key={index}
                className="w-16"
              />
            ))}
          </div>
        </div>
      </div>

      <form
        action=""
        className="flex flex-col gap-3  items-center w-full lg:w-[40%] ">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl text-pink my-2 text-center font-bold">
          Get in touch
        </motion.h1>
        <motion.input
          type="text"
          placeholder="Enter your name"
          required
          className=" w-full text-lg bg-white/20 py-2 px-3 rounded-md backdrop-blur-xl text-white border-0 outline-0"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
        />
        <input
          type="email"
          placeholder="ram123@gmail.com"
          required
          className=" w-full text-lg bg-white/20 py-2 px-3 rounded-md backdrop-blur-xl text-white border-0 outline-0"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className=" w-full mx-auto mt-2 mb-4  flex items-center justify-center gap-2 bg-lightWhite rounded-full py-2 pl-5 pr-1 cursor-pointer">
          <button className="w-full text-center text-white text-lg flex gap-2 items-center justify-center">
            Submit
            <img src={assets.uparrow_icon} alt="" className="w-3" />
          </button>
          <div className="py-2 px-2 rounded-full"> </div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export const CopyRight = ({ src }) => {
  return (
    <h1 className="text-center text-xl font-bold text-white py-7 bg-black/80 px-10">
      2024-2026 All right reserved{" "}
    </h1>
  );
};
