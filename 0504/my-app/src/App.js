import './App.css';
import Menu from './components/menu/Menu.jsx'
import TripList from './components/tripList/TripList'

// function TextArea() {
//   return (
//     <div className = "wrapper">
//       <textarea 
//       readOnly
//       maxLength = {3}
//       style = {{backgroundColor : "blue"}}>
//       </textarea>
//     </div>
//   )
// }


function App() {

  const name = "라이캣!!!!";
  const 변수 = "value";
  function 함수 () {
    console.log("함수 함수!")
  }
  
  //const 값 = true;

  //////
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const second = today.getSeconds();


  ///
  const visited = true;

  return (
    <div>
      <Menu/>
      {/**JSX 안의 주석입니다 */}
      <input type = "radio" checked = {false}/>
      <h1 hello = "hi">안녕 {name}!!</h1>
      <h1 style = {{}}>안녕 라이캣 2호!!</h1>


      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{day}</h1>
        <h1>시간 : {hour}시 {minutes}분 {second}초</h1>
      </div>
    <TripList/>
    </div>
  );
}

export default App;
