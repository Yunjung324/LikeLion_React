import Hello from './Components/Hello'
import Resume from './Components/Resume'
import ColorText from './Components/ColorText';


function LiCat() {
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  return(
    <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
  )
}


function Time(){
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return(
    <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
  )
}

function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name = "Gary"/>
      {/* <LiCat/>   */}
      {/* 사용자 정의 태그, 컴포넌트, 반드시 대문자로 시작*/}
      <Time/>
      <Resume hello = "안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      {/* <HelloProps 
				name="jaehyun" 
				age={25} 
				someFunc={() => 'awesome!!!'} 
				someJSX={<img src="https://picsum.photos/id/237/200/300" />} 
				someArr={[1, 2, 3]} 
				someObj={{ one: 1 }} /> */}
        <ColorText color="red"/>
        <ColorText color="green"/>
        <ColorText color="blue"/>
    </div>
  );
}

export default App;