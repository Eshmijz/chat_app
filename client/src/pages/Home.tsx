import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto p-10">
      <Link to="/123">Room 123</Link>
      <Link to="/124">Room 124</Link>
    </div>
  )
}
