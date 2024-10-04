import React, { useState } from 'react';
import AceEditor from 'react-ace';
// import axios from 'axios'

// Import modes (languages) and themes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

export function InputBox({onChange , label ,type , placeHolder}){
    return <div className="">
        
        <div className="">
        <div className="text-xs text-gray-100  font-light text-left py-2">{label}</div>
        <input onChange={onChange} type={type} placeholder={placeHolder || ""} className=" w-auto  focus:bg-slate-300 p-1 focus:outline-none border rounded-md border-slate-300  " />
    </div>
    </div>
}


export function CodeEditor({label , code,onchange}){
  

  return ( <div>
    <div className='rounded-xl '>
        <div>{label}</div>

      <AceEditor
        mode="javascript"  // Language mode
        theme=""     // Theme
        name="codeEditor"  // Unique identifier for the editor
        value={code}       // Code state
        onChange={onchange}  // Handle code change
        editorProps={{ $blockScrolling: true }}  // Prevents console warning
        setOptions={{ useWorker: false ,
            
         }}  // Disable the web worker to prevent issues in local environments
      />
        </div>
        
    </div>
  );
};
export function CodeEditor2({code}){
  console.log(code)

  return ( <div>
    <div className='rounded-xl '>
        {/* <div>{label || ""}</div> */}

      <AceEditor
        mode="javascript"  // Language mode
        theme="monokai"     // Theme
        name="codeEditor"  // Unique identifier for the editor
        value={code}       // Code state
        // onChange={onchange}  // Handle code change
        showPrintMargin={true}
        editorProps={{ $blockScrolling: true }}  // Prevents console warning
        setOptions={{ useWorker: false ,
        showLineNumbers: true,           // Line numbers
        tabSize: 2,                      // Tab size
        readOnly: true,                 // Make editor read-only
       }}/>
      </div>
        
    </div>
  );
};

// export CodeEditor2;

// export default CodeEditor;
