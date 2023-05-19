import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
import reset from "styled-reset"
import Button from "./Components/Button"

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`

function App() {
  const name = '이호준'
  const age = 10

  function 인사(문구, 이름, 나이) {
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`
  }

  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`

  console.log(인사문구)


  return (
    <>
      <Example />
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      {/* <Button/> */}
    </>
  );
}

export default App;