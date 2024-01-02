import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row lg:items-center space-x-5 ">
        <div className=" space-y-5">
          <p className="  text-3xl  font-semibold text-purple">Hello Mate 👋</p>
          <h2 className="txt_shadow_sm dark:text-white  font-bold leading-[130%] text-7xl">
            I’m <span className=" text-rose-500">TARIF</span> <br />
            Web Developer
          </h2>
          <div className=" inline-flex  items-start space-x-2">
            <span className=" h-[2px] w-10 bg-[#5E5C66]"></span>
            <p className="  max-w-[512px] text-lg font-normal text-slate-600">
              I&apos;m Jenifer a freelance UI/UX Designer from San-Francisco
              help brands turn their ideas.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant={"purple"}>Let’s Discuss</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
