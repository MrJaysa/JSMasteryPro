import { workExperience } from "@/data"
import Section from "./ui/Section"
import { Button } from "./ui/MovingBorders"

const Experience = () => {
  return (
    <Section
      id="Experience"
      className="py-20"
      divClassName="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10"
      first="My"
      second="work experience"
    >
      {workExperience.map((card) => (
        <Button
          key={card.id}
          borderRadius="1.75rem"
          className="text-wite flex-1 border-neutral-200 dark:border-slate-800"
          duration={Math.floor(Math.random() * 10000) + 10000}
        >
          <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
            <img
              src={card.thumbnail}
              alt={card.thumbnail}
              className="w-16 md:w-20 lg:w-32"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl font-bold md:text-2xl">
                {card.title}
              </h1>
              <p className="mt-3 text-start font-semibold text-white-100">
                {card.desc}
              </p>
            </div>
          </div>
        </Button>
      ))}
    </Section>
  )
}

export default Experience
