import { MouseParallax } from "react-just-parallax";

const Mouse = () => {
  return (
    <section className="flex m-0 p-0">
      <div className="flex flex-col w-[50%] mx-auto p-10 gap-10 rounded-lg bg-black text-white">
        <p className="text-lg font-normal">Mouse Parallax</p>
        <div className="relative">
          <div className="flex relative w-[100%] h-[256px] rounded-lg  bg-orange-300">
            <span className="absolute top-[50%] left-[50%] w-28 h-28 rounded-[50%] bg-transparent border-2 border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
            <span className="absolute top-[50%] left-[50%] w-28 h-28 rounded-[50%] bg-transparent border-2 border-white -translate-x-1/2 -translate-y-1/2" />
          </MouseParallax>
        </div>
      </div>
    </section>
  );
};

export default Mouse;
