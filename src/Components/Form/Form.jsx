import { useState } from "react";
import { assets, pcComponent } from "../../assets/assets";
import { motion } from "motion/react";

export const Form = () => {
  const [investment, setInvestment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Investment: ", investment);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      className="w-11/12 mx-auto mb-8 scroll-m-[4.5rem] "
      id="build">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl font-bold font-Lobster tracking-wider text-white text-center">
        Build your pc
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl font-bold font-Lobster tracking-wider text-white/75 my-2 mb-9 text-center">
        Fill the form
      </motion.h6>
      <div className="flex gap-2 flex-col lg:flex-row items-center justify-center ">
        <div className=" mb-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            whileInView={{ opacity: 1, scale: 1 }}
            src={assets.gif}
            alt=""
            className="w-[300px]"
          />
          <div className="flex gap-2">
            {pcComponent.map((img) => (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={img}
                alt=""
                className="w-[60px] h-[60px] shadow-lg shadow-white/30 
                cursor-pointer rounded-md mt-2 hover:-translate-y-[10px] duration-1000
                "
              />
            ))}
          </div>
        </div>

        <div className="bg-white/5 pt-14 mb-3 pb-5 rounded-md w-[80%] md:w-[70%] px-10">
          <motion.form
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1 }}
            action="w-full flex flex-col gap-5 ">
            <div className=" my-1 flex flex-col  lg:flex-row justify-between ">
              <div className=" flex flex-col gap-1">
                <label htmlFor="" className="text-white text-sm">
                  Hello your name
                </label>
                <input
                  type="text"
                  placeholder="Ramakrishnan"
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/10 cursor-pointer outline-0 border-0 text-sm text-white"
                />
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="" className="text-white text-sm">
                  Where are you located at?
                </label>
                <input
                  type="text"
                  placeholder="chennai"
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/10 cursor-pointer outline-0 border-0 text-sm text-white"
                />
              </div>

              <div className=" flex flex-col gap-1 ">
                <label htmlFor="" className="text-white text-sm">
                  your WhatsApp number
                </label>
                <input
                  type="text"
                  placeholder="+91 6738929379"
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/10 cursor-pointer outline-0 border-0 text-sm text-white"
                />
              </div>
            </div>
            <div className=" mt-5">
              <p className="text-white text-sm py-1">
                The Best Investment you are planning for this PC?
              </p>
              <div className=" flex gap-1 justify-between flex-col  lg:flex-row ">
                {["25000-100000", , "100000-150000", "more-150000"].map(
                  (range, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 bg-white/20 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                      <input
                        type="radio"
                        name="investment"
                        value={range}
                        className="form-radio text-blue-500"
                        onChange={(e) => setInvestment(e.target.value)}
                      />
                      <span
                        className="text-white 
                      ">
                        Rs {range.replace("-", " - Rs ")}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className=" mt-5">
              <p className="text-white text-sm py-1">
                When do you need the PC by?
              </p>
              <div className=" flex gap-1 justify-between flex-col  lg:flex-row ">
                {["In few days", , "In a month", "In few months"].map(
                  (range, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 bg-white/20 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                      <input
                        type="radio"
                        name="investment"
                        value={range}
                        className="form-radio text-blue-500"
                        onChange={(e) => setInvestment(e.target.value)}
                      />
                      <span
                        className="text-white 
                      ">
                        {range.replace("-", " - Rs ")}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-end">
              {" "}
              <button className="text-white bg-pink font-bold rounded-full my-5 py-2 px-4 text-center">
                Build now
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};
