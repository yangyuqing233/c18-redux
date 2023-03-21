import {useDispatch, useSelector} from "react-redux";
import {fetchImage} from "../actions/cityViewAction";
import {CityViewReducer} from "../reducers/cityViewReducer";

export const Controller =() =>{
    const dispatch = useDispatch()
    const selectedIndex = useSelector(state=>state?.CityViewReducer?.selectedImage)
    const imageLibrary =
        useSelector(state=> state?.CityViewReducer?.imageLibrary)
    return(
        <div>
            <h2>Controller Page</h2>
            <h2>{selectedIndex}</h2>
            <button onClick={()=>{dispatch(fetchImage())}}>click to fetch</button>
        </div>
    );
}