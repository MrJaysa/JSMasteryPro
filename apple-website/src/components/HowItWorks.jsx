import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
    });
    animateWithGsap(".g_fadeIn", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="my-20 w-full flex-center">
          <img src={chipImg} alt="Chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip
            <br />A monster for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggesst redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mb-14 mt-10 md:mt-20">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                ref={videoRef}
                preload="none"
                autoPlay
                muted
                playsInline
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray mt-3 text-center font-semibold">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far.
              </span>
              .
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
