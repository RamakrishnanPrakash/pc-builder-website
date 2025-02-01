import { processContainer } from "../../assets/assets";
import { motion } from "motion/react";

export const Process = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="w-full mx-auto py-10 px-12 scroll-m-16"
      id="process">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold font-Lobster tracking-wider text-white text-center">
        Understanding
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl font-bold font-Lobster tracking-wider text-white/75 my-2 text-center">
        the process
      </motion.h6>

      <div className="w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 grid xl:grid-cols-4 gap-6 my-10">
        {processContainer.map(({ icon, title, description }) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            key={title}
            className="py-4 px-5 bg-white/10 backdrop-blur-xl backdrop-filter rounded-md cursor-pointer hover:bg-black/35 duration-1000 hover:-translate-y-[10px]">
            <img src={icon} className="w-14 my-2" alt={title} />
            <h1 className="text-white text-lg font-bold mb-2">{title}</h1>
            <p className="text-white/65 text-sm mx-xl">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
