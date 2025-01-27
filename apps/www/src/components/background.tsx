import { FC } from "react"
import clsx from "clsx"
import Image from "next/image"

interface BackgroundProps {
  className?: string
}

export const Background: FC<BackgroundProps> = ({ className }) => {
  return (
    <div
      className={clsx("fixed inset-0 -z-10 h-full md:h-2/3 w-full", className)}
    >
      <Image
        src="/bg.svg"
        alt="background"
        fill
        className="object-contain object-top opacity-40"
      />
    </div>
  )
}
