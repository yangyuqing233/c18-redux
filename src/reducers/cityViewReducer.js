//A reducer is a function that receives the current state and an action object：接受当前的state和action
//decide how to update the state if necessary and return a new states: 根据逻辑更新state或者返回新的state
//reducer rules:immutability
//reducer can only calculate the new state based on previous state & payload
//you should make immutable updates
//you should not use asy method to update the states
//这里的state一旦更新就会刷新
import {FETCH_CITY, FETCH_CITY_REAL, FILTER_IMAGE, INPUT_CITY, LOADING, SELECTED_IMAGE} from "../const";
//global state
const iniState = {
    imageLibrary:[],
    selectedImage:0,
    imgReal:[],
    city:'Toronto',
    isLoading:true,
}
export const CityViewReducer = (state=iniState,action) =>{
    switch (action.type){
        case FETCH_CITY:
            console.log('cityview reducer===>',action?.payload)
            //复制state: ...state
            return{...state,imageLibrary: action?.payload}
        case FETCH_CITY_REAL:
            console.log('fetch cityview reducer===>',action?.imageLibrary)
            //复制state: ...state
            return{...state,imgReal: action?.imageLibrary}
        case SELECTED_IMAGE:
            console.log('select Image reducer===>',action?.payload)
            return{...state,selectedImage:action?.payload}
        case INPUT_CITY:
            return{...state,city:action?.payload}
        case FILTER_IMAGE:
            let temp =[...state.imageLibrary]
            let filter = temp.filter(item=>item==='imageUrl2'||item==='imageUrl3')
            return{...state,imageLibrary:filter}
        case LOADING:
            return{...state,isLoading:action?.payload}
        default:
            return state
    }
}
