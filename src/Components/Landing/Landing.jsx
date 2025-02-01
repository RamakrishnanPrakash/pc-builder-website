import { assets, socialMediaIcon } from "../../assets/assets";
import { motion } from "motion/react";
export const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="  relative  w-11/12 mx-auto py-20 px-[5%]  overflow-hidden flex items-center  justify-between   flex-col "
      id="home">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" mt-7 mb-5 text-center  text-4xl lg:text-6xl font-Lobster  tracking-wider text-white font-bold ">
        Build Your Dream pc’s{" "}
      </motion.h1>
      <motion.h5
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="leading-8 text-white/80 text-center text-lg lg:text-xl max-w-lg my-1">
        custom gaming & editing rigs,built for immersive experiences🔥🔥build
        your dream pc with us😇
      </motion.h5>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="  mx-auto mt-6 mb-4  flex items-center gap-2 bg-lightWhite rounded-full py-2 pl-5 pr-1 cursor-pointer">
        <button className="text-white text-xl font-bold">
          <a href="#build">Build now</a>
        </button>
        <div className="bg-pink py-3 px-3 rounded-full">
          {" "}
          <img src={assets.uparrow_icon} alt="" className="w-4" />
        </div>
      </motion.div>

      <div className="mx-auto">
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          src={assets.pc_img}
          alt=""
          className=" ml-4 md:max-w-2xl lg:max-w-3xl"
        />
      </div>
      {/* Social media icon */}
      <ul className=" hidden  md:block absolute top-[50%] -translate-y-[65%] left-0">
        {socialMediaIcon.map(({ icon, link }) => (
          <li key={icon}>
            <a href={link}>
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                src={icon}
                alt=""
                className="w-20 xl:w-24"
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
