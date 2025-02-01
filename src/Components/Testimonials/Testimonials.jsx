import { assets } from "../../assets/assets";
import { motion } from "motion/react";

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="w-full mx-auto "
      id="testimonails">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold font-Lobster tracking-wider text-white text-center">
        Testimonials
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl font-bold font-Lobster tracking-wider text-white/75 my-2 mb-9 text-center">
        Award
      </motion.h6>
      <div
        className={` py-5 px-5 mx-auto w-11/12 relative bg-[#0008]  rounded-md shadow-md shadow-white/70 `}>
        <div className=" w-full h-full relative flex items-center justify-center flex-col ">
          <img
            src={assets.review_icon}
            alt=""
            className="absolute top-1 right-4 w-[150px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-2xl font-bold text-white  tracking-wider text-center">
            What our client says
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg font-bold text-white/70  mt-4 tracking-wider text-center">
            our client send us bunch of smiles with our service and we love
            them.
          </motion.h6>
          <div className=" mt-5 w-full relative flex items-center justify-center  flex-col gap-3">
            <div className="w-full h-[200px] flex items-center justify-center flex-col relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                src={assets.ram_img}
                className="w-[150px] h-[150px] rounded-full  shadow-myshadow border border-white"
                alt=""
              />
              {/* <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                src={assets.corspc}
                className="w-[80px] h-[80px] rounded-full  shadow-myshadow border border-white absolute top-2 right-8"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                src={assets.corspc}
                className="w-[80px] h-[80px] rounded-full  shadow-myshadow border border-white absolute bottom-6 left-6 md:left-20"
                alt=""
              /> */}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl font-bold text-white/90  mt-1 tracking-wider">
              Ramakrishnan Gunasekaran
            </motion.h1>
            <motion.h6
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg font-bold text-white/60  tracking-wider">
              React developer
            </motion.h6>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-xl text-white/40 text-center text-sm">
              The build quality is solid, and it runs everything I throw at it.
              However, I wish it was a little more affordable. Still, a great
              investment!
            </motion.p>
            <div className="w-full flex justify-end">
              <div className="flex gap-10 ">
                <img
                  src={assets.leftarrow_icon}
                  alt=""
                  className="w-8 cursor-pointer"
                />
                <img
                  src={assets.leftarrow_icon}
                  alt=""
                  className="w-9 rotate-180 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
