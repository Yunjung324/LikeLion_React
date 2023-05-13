import React, {useState} from "react";

function Resume(props){
    const [like, setLike] = useState(0);
    // let like = 0;
    // const[txt, settxt] = useState('hello')

    function clickLike() {
        setLike(like + 1);
        console.log(like);
    }

    const someStyle = { border : "solid 1px", width : "500px" }
    return(
        <div style={someStyle}>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색: <span style = {{color:props.color}}>{props.color}</span></h2>
            <button onClick={clickLike}>like <span>{like}</span></button>{on}
            {/* <input type = "text" value = {txt}></input> */}
        </div>
    )
}

export default Resume