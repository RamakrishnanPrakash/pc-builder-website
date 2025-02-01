import { useState } from "react";
import { latestPcBuild } from "../../assets/assets";
import { motion } from "motion/react";
export const Product = () => {
  return (
    <motion.div
      id="product"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="w-11/12 mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold font-Lobster tracking-wider text-white text-center">
        Our Latest pc
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl font-bold font-Lobster tracking-wider text-white/75 my-2 mb-9 text-center">
        build
      </motion.h6>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {latestPcBuild.flat().map(({ pc_name, img, price }, index) => (
          <ImageCard
            key={pc_name || index}
            img={img}
            pc_name={pc_name}
            price={price}
          />
        ))}
      </div>
    </motion.div>
  );
};

// 🔹 ImageCard Component (Handles Image Loading)
const ImageCard = ({ img, pc_name, price }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`break-inside-avoid ${
        !loaded && "bg-[#0000006e]"
      } bg-white/70 p-4 rounded-lg shadow-lg hover:-translate-y-[18px] duration-1000 cursor-pointer`}>
      {/* 🔄 Skeleton Loader (Shown Until Image Loads) */}
      {!loaded && (
        <div className="w-full h-[250px] bg-gray-300 animate-pulse rounded-lg"></div>
      )}

      {/* 📸 Actual Image (Shows When Loaded) */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        src={img}
        alt={pc_name}
        onLoad={() => setLoaded(true)} // 🔥 Marks Image as Loaded
        className={`w-full h-auto rounded-lg object-cover transition-opacity duration-500 ${
          loaded ? " block opacity-100" : "hidden opacity-0"
        }`}
      />

      {/* 🏷️ Product Details */}
      <div className="mt-2 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-gray-900 font-semibold">
          {pc_name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700">
          ${price}
        </motion.p>
      </div>
    </div>
  );
};
