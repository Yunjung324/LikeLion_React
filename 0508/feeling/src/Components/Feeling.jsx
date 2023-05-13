import React, {useState} from "react";


export default function Feeling(props) {
    const btnstyle = {border: "10px", width: "200px", height: "50px"}

    const [feel, setFeel] = useState(0);


    function clickFeel(){}


    return(
        <div>
            <h1>오늘의 기분을 선택해주세요😊</h1>
            <button onClick = {clickFeel} style = {btnstyle}>기분이: {props.good}</button>
            <button onClick = {clickFeel} style = {btnstyle}>기분이: {props.best}</button>
            <button onClick = {clickFeel} style = {btnstyle}>기분이: {props.awesome}</button>
            <button onClick = {clickFeel} style = {btnstyle}>기분이: {props.crazy}</button>
            <div style = {{width: "400px", height: "400px", border: "3px solid", borderRadius: "15px"}}></div>
        </div>
    )
}