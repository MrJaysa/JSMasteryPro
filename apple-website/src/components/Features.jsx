import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#featuresTitle", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 },
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="relative h-full overflow-hidden bg-zinc common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="featuresTitle" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex-col overflow-hidden flex-center">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium.
            </h2>
          </div>
          <div className="flex-col flex-center sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                id="exploreVideo"
                className="h-full w-full object-cover object-center"
                ref={videoRef}
                preload="none"
                autoPlay
                muted
                playsInline
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore1Img}
                    alt="Titanium"
                    className="g_grow feature-video"
                  />
                </div>
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore2Img}
                    alt="Titanium"
                    className="g_grow feature-video"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    Titanium has one of the best strength‑to‑weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">lightest Pro models ever</span>
                    . You’ll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
