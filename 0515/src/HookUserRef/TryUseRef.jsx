import React, { useState, useEffect, useRef } from "react";

// num2가 setNum2를 통해서 바뀌면 Counter2가 실행되는 것.
function Counter2() {
    const [num2, setNum2] = useState(0);
    // useState를 사용하여 num2에 현재 상태를 계속 rendering
    // let num = 0; 
    // 이렇게 변수로 둔거는 화면이 바뀔때마다 0이 됨.
    const num = useRef(0)
    // 기억하고 있는 값을 집어넣음.

    return (
        <>
            <button onClick={() => setNum2(num2 + 1)}>버튼</button>
            <div>{num2}</div>
            <button
                onClick={() => {
                    num.current += 1;
                    console.log(num.current);
                }}>
                버튼
            </button>
            <div>{num.current}</div>
        </>
    );
}

export default Counter2;