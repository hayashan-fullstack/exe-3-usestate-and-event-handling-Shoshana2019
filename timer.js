import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Timer =() =>{
const [minuts, setMinuts] = useState(0)
const [second, setSecond] = useState(0)
console.log(minuts)
// const restart = () => {
//     clearTimeout
// setCounter(0)
// }
setTimeout(() => {
    if(second==59){
        setSecond(0)
        setMinuts(minuts + 1)
    }
    else setSecond(second + 1)
}, 100)
// for(let i=0; i<10; i++) {
//     console.log(props.counter)
// }
return (
    <div style={{ margin: '20%' }}>
        <h1> That is my clock:</h1>
        <h2> {minuts + " : " + second}</h2>
        <br />
        {/* <button onClick={restart}>restart</button> */}
    </div>
)
}