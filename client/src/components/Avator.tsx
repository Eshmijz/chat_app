import React from 'react'

const animals = [
  "bear", "cat", "chicken", "dog", "fox", "koala", "panda", "rabbit"
]

export const Avator = React.memo(() => {
  return (
    <div className="w-12 h-12 rounded-full">
      <img src={`/${animals[Math.floor(Math.random() * animals.length)]}.png`} alt="" />
    </div>
  )
})

