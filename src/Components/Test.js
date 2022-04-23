import React,{useState} from 'react';
const Test=()=> {

const [g, setg]= useState(0);
const [b, setb]= useState(0);


return(
    
<>
    <button  onClick= {()=> setg(g+1)} >Good</button>
    <button onClick= {()=> setb(b+1)} >Bad</button>

    <div>
        good {g}<br/>
        baad {b}
    </div>
</>
)
};
export default Test;