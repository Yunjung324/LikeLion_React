import React from 'react'
import styled from "styled-components"

export default function App6() {
  const Button = styled.button`
    background-color: royalblue;
    padding : 10px;
    color: #fff;
  `
  const ButtonStyle2 = styled(Button)`
    color: #000;
    border: none;
    border-radius: 10px;
    font-weight: bold;
  `
  const ButtonStyle3 = styled(Button)`
    color: yellow;
    width: 100px;
    background-color: lightgreen;
  `
  const ButtonStyle4 = styled(ButtonStyle2)`
    background-color: yellow;
    border: 1px solid black;
  `

  return (
    <div>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼3</ButtonStyle3>
      <ButtonStyle4>버튼4</ButtonStyle4>
    </div>
  )
}
