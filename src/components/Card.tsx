import { ReactNode } from 'react'

interface ICard {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: ICard) => {
  return (
    <div
      className={`flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
