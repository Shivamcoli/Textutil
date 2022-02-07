
import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text, setText] = useState('');
const handleOnchange=(event)=>{
    console.log("change");
    setText(event.target.value);
}
const handleOnclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    console.log("click")
    props.showAlert("Converted to upper case","success")
}

const handleOnclick1=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    console.log("click")
    props.showAlert("Converted to lower case","success")
}

const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra space removed","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
        }
        const clearText=()=>{
            let newtext='';
            setText(newtext);
            console.log("click")
            props.showAlert("Cleared","success")
        }

  return(
    <>
<div className="container  mb-3" style={{color:props.mode==='dark'?'white':'black'}} >
  <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>

<button className="btn btn-primary my-3" onClick={handleOnclick} >To Upper</button>
<button className="btn btn-primary mx-2 my-3" onClick={handleOnclick1} >To Lower</button>
<button className= "btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
<button className= "btn btn-primary mx-1 my-3" onClick={handleCopy}> Copy Text</button>
<button className= "btn btn-primary mx-1 my-3" onClick={clearText}> Clear</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} alphabets </p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Text"}</p>
</div>
    </>
  );
}
