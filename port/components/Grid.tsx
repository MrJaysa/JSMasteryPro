import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              spareImg,
              imgClassName,
              titleClassName,
            },
            i
          ) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              spareImg={spareImg}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid
