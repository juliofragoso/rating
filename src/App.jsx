import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { RatingContext } from "./Contexts/ratingContext"
import Rating from "./Rating"
import Sucesso from "./Sucesso"


export default function App() {

  const [rating, setRating] = useState()

  return(
    <RatingContext.Provider value={{rating, setRating}}>
      <Routes>
        <Route path="/" element={<Rating />} />
        <Route path="sucesso" element={<Sucesso />} />
      </Routes>
    </RatingContext.Provider>
  )
}