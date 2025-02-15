import React from "react";
import Car1 from "../assets/black.png";
import Car2 from "../assets/blue.png";
import Car3 from "../assets/red.png"
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Car1,
    title: "BMW X7 xDrive40i ",
    subtitle:
      "The BMW X7 xDrive40i fascinates from the very first encounter with its combination of uncompromising power, luxurious comfort and expressive design language",
    price: "₹ 13,140,000",
    modal: "X7",
    bgColor: "#000000",
  },
  {
    id: 2,
    image: Car2,
    title: "BMW M4 M xDRIVE",
    subtitle:
      "The New M4 Competition M xDrive combines aesthetics and the sportiness you expect from BMW M. A wealth of technologies from the motorsports sector enhance the driving dynamics of the M4. ",
    price: "₹ 1,56,00,000",
    modal: "M4",
    bgColor: "#007aff",
  },
  {
    id: 3,
    image: Car3,
    title: "BMW i5 M60 xDRIVE",
    subtitle:
      "Drive into a world where the ingenuity of BMW i and the power of BMW M connect. Introducing the first-ever BMW i5 M60, a 100% electric marvel that isn't just a car. ",
    price: "₹ 1,19,50,000",
    modal: "i5",
    bgColor: "#ac1a00",
  }

];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white"
      >
        {/* navbar components */}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/*Cars Info*/}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <motion.button
                key={activeData.id}
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ color: activeData.bgColor }}
                className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
              >
                Order Now
              </motion.button>

              {/* Cars List*/}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* Car switch */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10 max-[430px]:grid-cols-1"
              >
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                              }`}
                          />
                        </div>
                        <div className="!mt-6 space-y-1 text-center">
                          <p className="text-base opacity-50 max-[500px]:text-sm">
                            Starting from
                          </p>
                          <p className="text-xl font-bold max-[500px]:text-base">{item.price}</p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end items-center relative order-1 md:order-2 md:translate-x-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[350px] sm:w-[450px] md:w-[400px] xl:w-[550px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* WhatsApp Icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        {/* Footer section  */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-[1px] bg-white"></div>
            <p className="uppercase text-sm font-sans">Created by</p>
            <div className="w-20 h-[1px] bg-white"></div>
          </div>
           <p className="uppercase font-handwriting">❤️ Sibu Chanda ❤️</p>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
