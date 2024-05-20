import Image from "next/image";
import about_1 from "../../../public/about_1.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-8 lg:min-h-dvh  flex flex-col justify-center items-center px-4 md:px-20 bg-backgroundCream "
    >
      <div className="lg:mt-24 xl:mt-0 grid  grid-cols-1 lg:grid-cols-[1.5fr_2.5fr] xl:grid-cols-[1.2fr_2.2fr] grid-rows-[0.2fr_1.8fr] lg:gap-y-12 xl:gap-y-2 gap-x-8 grid-flow-row lg:w-10/12 xl:w-9/12 ">
        <div className="div1 lg:col-span-2 justify-self-center">
          <h2 className="text-7xl font-extrabold text-secondaryPurple mb-6 lg:mb-0">
            About me
          </h2>
        </div>

        <div className="div2 z-[1] flex items-center justify-center ">
          <Image
            alt="Enlgish tutor photo"
            src={about_1}
            width={400}
            height={300}
            className=""
            placeholder="blur"
          />
        </div>

        <div className="div3 flex items-center">
          <p className="text-balance text-xl font-light p-4 bg-white lg:py-8 lg:pl-24  lg:-ml-24   xl:pl-32 xl:py-20 xl:-mx-32">
            Whatever the situation, I will help you to achieve your goals.
            Having an academic background in languages and international
            studies, I can empathize with you and help you find the most
            effective course of study. I am approachable, personable, and have a
            strong commitment to excellence. <br></br>
            <br></br>I am university-educated and in addition to writing my
            dissertation for my master’s degree, I also work as a writer for a
            print publication and as an editor for an academic journal. I am
            also a seasoned researcher with many years of research experience
            under my belt. I have an established background in education and am
            happy to teach in a manner that caters to your individual learning
            needs. I am willing to work with you at any level of comfort or
            skill, and I am able to try as many methods as necessary to get you
            where you need to be.
          </p>
        </div>
      </div>
    </section>
  );
}
