import { useState, useMemo } from "react";

function 부하() {
    let s = 0;
    for (let i = 0; i < 1000000000; i++) {
        s += i;
    }
    return s;
}

function TryUseMemo() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const handleCountUp = (e) => {
        setCount(count + 1)
        console.log(count)
    }
    const handleCountUpTwo = (e) => {
        setCountTwo(countTwo + 1)
        console.log(countTwo)
    }

    //메모 2
    console.log('랜더링!!')
    //평소에는 메모되어있는걸 가져다쓰고
    //countTwo가 바뀌었을때 부하 함수를 실행시키는 메모
    const result = useMemo(() => {
        return 부하()
    }, [countTwo])

    return (
        <div className="App">
            <h1>계산 결과 : {result}</h1>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
        </div>
    );
}
export default TryUseMemo;