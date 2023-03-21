import {Controller} from "./Controller";
import {useDispatch, useSelector} from "react-redux";
import {filterImage, selectImage} from "../actions/cityViewAction";
import {CityViewReducer} from "../reducers/cityViewReducer";
//GUI,用户前端的操作触发
//需要哪个state？
function Main(){

    const dispatch = useDispatch()
    const imageLibrary =
        useSelector(state=> state?.CityViewReducer?.imageLibrary)

    return(<div>
        <h1>Main Page</h1>
        <Controller />
        <button onClick={()=>{dispatch(selectImage(2))}}> click to choose</button>
        {
            imageLibrary.length!=0&&
            imageLibrary.map((item,index)=>
                <p key ={index} onClick = {()=>{dispatch(selectImage(index))}}>{item} </p>)
        }
        <button onClick={()=>{dispatch(filterImage())}}> click to filter</button>
    </div>);
}
export default Main