import {useEffect, useState } from "react"
import {  CodeEditor2} from "../components/inputbox";
// import { TagBox } from "./tagBox";
import axios from 'axios'
import { Navbar } from "../components/navbar";
import { TitleCard } from "../components/tagBox";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.REACT_APP_API_URL

export function PublicPage(){
    
    const [gcode, setGcode] = useState([]);
    
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5500/v1/api/postgist')
        .then((response)=>{
            console.log(response.data.gisti)
            // const gisti = response.data.gisti
            setGcode(response.data.gisti)
            console.log(gcode)
            
        })
    },[])
    return <div>
        <Navbar dashboard={"dashboard"}/>
        <div>
            { gcode.map( (data) => <TitleCard code={data} title={data.codeTitle}/>) }
        </div>
    </div>
}