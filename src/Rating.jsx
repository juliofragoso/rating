
import {FaStar} from "react-icons/fa"
import { Link } from "react-router-dom"
import { RatingContext } from "./Contexts/ratingContext"
import { useContext } from "react"

export default function Rating(){

  const {rating,setRating} = useContext(RatingContext)

  function avalia(e){
    e.preventDefault()
    console.log(rating)
  }



  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex flex-col w-96 bg-gray-800 rounded-2xl p-6">
        <div className="rounded-full bg-gray-700 px-2 text-orange-400 py-2 w-8 text-center font-bold mb-3"><FaStar /></div>
        <h1 className="text-2xl text-white mb-3 font-lato italic">Como você nos avalia?</h1>
        <p className="text-gray-500 mb-4">Por favor, deixe-nos saber como foi sua experiência com nosso suporte. Todo feedback é extremamente importante para que possamos melhorar.</p>
        <form onSubmit={avalia}>
          <div className="flex justify-between mb-6">
            {rating == 1
            ? <button onClick={(e)=>setRating("1")} className="cursor-pointer rounded-full bg-white text-gray-800 px-2 y-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">1</button>
            : <button onClick={(e)=>setRating("1")} className="cursor-pointer rounded-full bg-gray-700  text-gray-400 px-2 py-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">1</button>
            }
            {rating == 2
            ? <button onClick={(e)=>setRating("2")} className="cursor-pointer rounded-full bg-white text-gray-800 px-2 y-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">2</button>
            : <button onClick={(e)=>setRating("2")} className="cursor-pointer rounded-full bg-gray-700  text-gray-400 px-2 py-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">2</button>
            }
            {rating == 3
            ? <button onClick={(e)=>setRating("3")} className="cursor-pointer rounded-full bg-white text-gray-800 px-2 y-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">3</button>
            : <button onClick={(e)=>setRating("3")} className="cursor-pointer rounded-full bg-gray-700  text-gray-400 px-2 py-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">3</button>
            }
            {rating == 4
            ? <button onClick={(e)=>setRating("4")} className="cursor-pointer rounded-full bg-white text-gray-800 px-2 y-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">4</button>
            : <button onClick={(e)=>setRating("4")} className="cursor-pointer rounded-full bg-gray-700  text-gray-400 px-2 py-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">4</button>
            }
            {rating == 5
            ? <button onClick={(e)=>setRating("5")} className="cursor-pointer rounded-full bg-white text-gray-800 px-2 y-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">5</button>
            : <button onClick={(e)=>setRating("5")} className="cursor-pointer rounded-full bg-gray-700  text-gray-400 px-2 py-2 w-10 text-center font-bold mb-3 transition-colors duration-500 hover:bg-orange-400  hover:text-white">5</button>
            }
          </div>
          <Link to="/sucesso">
            <button type="submit" className="w-full font-bold bg-orange-400 rounded-2xl py-2 text-white hover:bg-white hover:text-orange-400 transition-colors duration-500">
                ENVIAR
            </button>
          </Link>
        </form>
      </div>     
    </div>
  )
}