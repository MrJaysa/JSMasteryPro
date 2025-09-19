import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"
import Section from "./ui/Section"

const Clients = () => {
  return (
    <Section
      id="testimonials"
      className="py-20"
      divClassName="flex flex-col items-center max-lg:mt-10"
      first="Kind words from"
      second="satisfied clients"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
            <img src={img} alt={name} className="w-5 md:w-10" />
            <img src={nameImg} alt={name} className="w-20 md:w-24" />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Clients
