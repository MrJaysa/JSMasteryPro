import React from "react"

const Section = ({
  id,
  className,
  divClassName,
  first,
  second,
  children,
}: {
  id: string
  className: string
  divClassName: string
  first: string
  second: string
  children: React.ReactNode
}) => {
  return (
    <section id={id} className={className}>
      <h1 className="heading">
        {first} {` `}
        <span className="text-purple">{second}</span>
      </h1>
      <div className={divClassName}>{children}</div>
    </section>
  )
}

export default Section
