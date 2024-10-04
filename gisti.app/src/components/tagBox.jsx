import { Link } from "react-router-dom";
import { Viewgist } from "../pages/viewgist";

export function TitleCard({title ,onClick , code }){
    console.log(code)
    return <div onClick={onClick} className=" bg-white m-2 p-3 w-full rounded-md text-black font-medium ">
        <Link to='/publicgist/viewgist' state={code} >{title}</Link>
        </div>
}
    