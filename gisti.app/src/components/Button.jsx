export function Button({onClick ,text}){
    return <div>
         <button className="hover:bg-teal-400 font-medium text-sm bg-white text-black flex rounded p-1 px-2 mt-2" 
                    type="submit" onClick={onClick}>{text}</button>
    </div>
}