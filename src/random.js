import {useState} from "react";

function Random()
{
    var [number,randomnum] = useState(0);
function  generate()
{
  randomnum(  Math.floor((Math.random()*10)+1));
}

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={generate}>Random Number</button>
        </div>
    )
}

export default Random;