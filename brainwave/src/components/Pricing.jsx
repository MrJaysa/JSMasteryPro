import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="relative hidden justify-center md:mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="Sphere"
            width={255}
            height={255}
            className="relative z-1"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              alt="Stars"
              width={950}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/pricing"
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
