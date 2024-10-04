

// import {  } from "react";
import {useEffect, useState } from "react"
import {CodeEditor,  CodeEditor2, InputBox } from "../components/inputbox";
// import { TagBox } from "./tagBox";
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Button } from "../components/Button";
const apiUrl = import.meta.env.REACT_APP_API_URL


export function Dashboard(){
    const [inputTitle , setInputTitle] = useState("");
    // const [gcode , setGcode] = useState([])
    const [code, setCode] = useState('// Write your JavaScript code here');
    // const navigate = useNavigate()



    return <div className="m-2 h-full ">
        <Navbar/>
        <div className="grid grid-cols-12">
            <div className="m-2 col-span-2 border-r border-r-slate">
                <code> components  and things </code>
                {inputTitle}
                {/* {getCode} */}
                
            </div>
            <div className="col-span-8">
                <div className=" pt-4">
                    <code> <InputBox className="" onChange={(e)=>{
                    setInputTitle(e.target.value)
                    }} type="text" label={"title"} placeHolder={"nothing big"}/>
                    </code>
                </div>
                <div className="pt-4 " >
                    <CodeEditor onchange={newValue => setCode(newValue)} code={code} label={"code"}/>
                </div>
                
                
                
                <div className="">
                    <Button text={"Create Gist"} onClick={()=>{
                        
                        console.log(code)
                        if(!code || !inputTitle){
                            console.log("missing fields")
                            alert("massage:missing inputs")
                            return;
                        }
                        
                        axios.post(`http://localhost:5500/v1/api/postgist`, {
                            codeData:code,
                            codeTitle:inputTitle
                          })
                          .then(function (response) {
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                        
                 }}/>
                 <div>
                   
                 </div>
                </div>
                
            </div>
             
        </div>
    </div>
}