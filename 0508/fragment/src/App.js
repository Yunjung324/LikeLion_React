import React, { Fragment } from 'react';
import './FragmentTest.css';

function ListItem({ item }) {
  return (
    <div>
      <React.Fragment>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠</dd>
      </React.Fragment>
    </div>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      {/* {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return (
    list.map((item) => {
      return (<>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : "아직 안감"}</p>
      </>)
    })
  );
}


// 실습 //
const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function MyTest() {
  return(
    items.map(({id, name, desc})=> {
      return(
      <dl>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </dl>)
    })
  )
}

function ItemList() {

  const itemList = items.map(({ id, name, desc }) => {
    return (<React.Fragment key={id}>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </React.Fragment>);
  });

  return (
    <dl>
      {itemList}
    </dl>
  )

}

function App() {
  return (
    <div>
			<h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>
      {/* <MyComponent/> */}
      <MyTest/>
		</div>
  );
}
export default App;