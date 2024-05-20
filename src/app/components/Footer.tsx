/* eslint-disable jsx-a11y/alt-text */
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";

export default function Footer() {
  const texts = useRef<Array<SVGTextPathElement | null>>([]);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      texts.current.forEach((text, index) => {
        text?.setAttribute("startOffset", -35 + index * 35 + value * 40 + "%");
      });
    });
  }, [scrollYProgress]);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [windowWidth < 768 ? -150 : -300, 0]
  );

  return (
    <section id="footer" ref={container}>
      This is footer
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 300"
        className="stroke-[20] md:stroke-[12]"
      >
        <path
          d="M74.37886895989527 93.47715282468295C117.85121787881008 118.53544887570834 197.7510753998672 207.11691420265333 279.7600449547681 211.86280345944857C361.7690145096692 216.6086927162438 365.5761879397942 119.12588298825716 461.8228196129712 115.89867687253451C558.0694512861483 112.67147075681186 676.7585300113274 179.53095971453484 734.4685410485181 196.61616039304232 "
          id="curve"
          fill="none"
          transform="matrix(1.2762815625000004,0,0,1.2762815625000004,-115.71009388486635,-40.61296513797171)"
        ></path>
        <text className="text-[28px]  md:text-[20px] font-bold uppercase">
          {[...Array(3)].map((undefinedValue, index) => {
            return (
              <textPath
                key={index}
                href="#curve"
                startOffset={index * 35 + 4 + "%"}
                // @ts-ignore: Unreachable code error
                ref={(ref) => (texts.current[index] = ref)}
              >
                Ligntning English
              </textPath>
            );
          })}
        </text>
      </svg>
      <div className="h-48 md:h-[250px]  bg-slate-200 overflow-hidden  flex ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{ y }}
          className=" flex-1 h-full justify-center items-center flex gap-10 p-10"
        >
          {[...Array(4)].map((_, index) => {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`footer_${index + 1}`}
                src={`/footer_${index + 1}.svg`}
                className="w-8 md:w-16 md:h-16 "
              ></img>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
