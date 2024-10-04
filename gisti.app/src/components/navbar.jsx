import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export function Navbar({dashboard}){
  const navigate = useNavigate()
    return <div className='h-full sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors border-b border-gray-500'>
    <div 
      className="cursor-pointer p-3 flex justify-between items-center text-center text-2xl text-white font-bold">
      <div>Gisti.io</div>
      
      <div> 
        { dashboard=="dashboard" ? <Button onClick={()=>{navigate('/')}} text={"Dahboard"} /> : <Button onClick={navigate('/publicpage') } text={"public gists"}/>}</div>
      </div>
  </div>
}