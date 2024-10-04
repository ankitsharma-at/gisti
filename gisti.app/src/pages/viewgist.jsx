import { useLocation, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { CodeEditor2 } from "../components/inputbox";

export function Viewgist(){
    const location = useLocation(); 
    const codedata = location.state.codeData || {meassagr:"what"};
       console.log(codedata)
    return <div>
        <Navbar dashboard={"dashboard"}/>
        <div className="flex justify-center mt-4">
            <CodeEditor2 code={codedata} />
        </div>
    </div>
}