import React, { useState } from 'react'



export default function Textform(props){

    const [text , setText] = useState('')

    const handleupclick =()=>{
        console.log('uppercase ')
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleonchange = (e)=>{

        console.log("onchange")
        setText(e.target.value)
    }
    const handletoclick =()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleclearclick=()=>{
        let newtext =" ";
        setText(newtext)
    }
  
    return (
       <>

       <div>
       
        <h1>{props.heading}</h1>
        <div className='mb-3'>
           
            <textarea className='form-control' value={text} onChange={handleonchange} id='myBox' rows="15"></textarea>
        </div>
       <button className='btn btn-primary mx-3 my-2' onClick={handleupclick}>convert to uppercase</button>
       <button className='btn btn-primary mx-3 my-2' onClick={handletoclick}>convert to lowercase</button>
       <button className='btn btn-primary mx-3 my-2 ' onClick={handleclearclick}>clear text</button>
       {/* <button className='btn btn-primary' onClick={returnclick}>Return</button> */}
       
       </div>
       <div className='container my-3'>
      
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words     {text.length} characters</p>
         <p>{0.08 * text.split(" ").length} time required to read </p>
         <h1>    preview    </h1>
         <p>{text}</p>
       </div>

       </>


    )

}