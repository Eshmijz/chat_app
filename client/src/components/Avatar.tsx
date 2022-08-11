import React from 'react'

const animals = [
  "bear", "cat", "chicken", "deer", "doberman", "dog", "fox", "giraffe", "koala", "lion", "monkey", "owl", "panda", "polar-bear", "rabbit", "sea-lion", "snake"
]

type AvatorProps = {
  userId: number
}

export const Avatar: React.FC<AvatorProps> = React.memo(({ userId }) => {
  return (
    <div className="w-12 h-12 rounded-full">
      <img src={`/${animals[(userId) % animals.length]}.png`} alt="" />
    </div>
  )
})

