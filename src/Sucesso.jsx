import {VscPassFilled} from "react-icons/vsc"
import { RatingContext } from "./Contexts/ratingContext"
import { useContext } from "react"

export default function Sucesso(){

  const {rating} = useContext(RatingContext)


  return (
    <div className="flex justify-center items-center text-center w-full h-screen bg-gray-900">
      <div className="flex flex-col w-96 bg-gray-800 rounded-2xl p-6">
        <div className="flex px-2 text-green-400 py-2 text-5xl font-bold mb-3 justify-center"><VscPassFilled /></div>
        <div className="flex justify-center bg-slate-700 text-orange-400 text-sm w-48 rounded-md py-1 mx-auto my-2">Você selecionou {rating} de 5</div>
        <h1 className="text-2xl text-white mb-3 font-lato italic mx-auto">Obrigado!</h1>
        <p className="text-gray-500 mb-4">Nós agradecemos seu feedback avaliando nosso trabalho. Não deixe de entrar em contato</p>
      </div>  
    </div>
  )
}