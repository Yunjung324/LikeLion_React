const addNumber = () => {
    return {type : "ADD"}
}

const substractNumber = () => {
    return { type : "SUBSTRACT" }
}

const initialState = {
    stock: 100,
    goods: 1
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, 
                stock: state.stock - 1,
                // 사용자가 누른거는 +1
                goods: state.goods + 1
            }
        case "SUBSTRACT":
            return{
                ...state,
                stock: state.stock - 1,
                goods: state.goods + 1
            }
        default:
            return state
    }

}
export default goodsReducer