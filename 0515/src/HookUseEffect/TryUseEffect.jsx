import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [isFirstRender, SetIsFirstRender] = useState(true)
    const handleCountUp = (e) => {
        setCount(count + 1);
    };
    useEffect(() => {
        if(isFirstRender) {
            SetIsFirstRender(false)
        }
        else{
            if (count % 2) {
                alert("홀수입니다")
            }
            else {
                alert("짝수입니다")
            }
        }
    }, [count])
    // [count]는 useEffect
    // 안에 여러개 들어갈 수 있기 때문에 [count, name]처럼 []안에 넣어줌
    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>Up!</button>
        </>
    );
}
export default Counter;