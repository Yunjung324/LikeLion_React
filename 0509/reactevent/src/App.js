import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  // login의 상태값은 기본적으로 false
  // setLogin이란 함수, 함수를 대신 보내줌.
  const [login, setLogin] = useState(false);

  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  return(
    <>
      {login ? <Homepage/> : < Login infoUser = {user} setLogin = {setLogin}/>}
      {modalShow && <Modal modalClose = {modalClose}>
        <h2>사용 약관에 대해 말씀드리겠습니다.</h2>
        <p>Lorem</p>
      </Modal>}
    </>
  

  );
}

export default App;