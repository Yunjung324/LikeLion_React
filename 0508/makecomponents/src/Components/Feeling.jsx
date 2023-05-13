import React, {useState} from "react";


export default function Feeling(props) {
    const btnstyle = {border: "10px", width: "100px"}

    const [feel, setFeel] = useState(0);


    function clickFeel() {
    }

    return(
        <div>
            <h1>오늘의 기분을 선택해주세요😊</h1>
            <button onClick = {clickFeel} style = {btnstyle}>기분이 {props.good}</button>
            <button onClick = {clickFeel}>기분이 정말 좋아요</button>
            <button onClick = {clickFeel}>기분이 최고에요</button>
            <button onClick = {clickFeel}>기분이 미쳤어요</button>
            <div></div>
        </div>
    )
}