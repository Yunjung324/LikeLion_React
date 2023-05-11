import './Menu.css'

function Menu(){
    return (
        // 문자열은 {}없이도 사용 가능
        <ul className = {"newClass"} style = {{backgroundColor: "black", color: "yellow"}}>
            <li>짜장면</li>
            <li>짬뽕</li>
        </ul>
    )
}

export default Menu