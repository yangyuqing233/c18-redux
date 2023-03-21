import {useDispatch, useSelector} from "react-redux";
import {fetchImageReal, filterImage, selectImage, userInput} from "../actions/cityViewAction";
import './CityView.css'
import {useEffect} from "react";
//开局load东西：useEffect

function CityView(){
    //render image when page is loaded
    // useEffect(()=>dispatch(fetchImageReal('Toronto')),[])

    const city =
        useSelector(state=> state?.CityViewReducer?.city)
    //useEffect+dispatch, city也可以是useState 的local版本，而不是reducer的redux版本
    useEffect(()=>dispatch(fetchImageReal(city)),[city])


    const dispatch = useDispatch()
    const imageLibrary =
        useSelector(state=> state?.CityViewReducer?.imageLibrary)


    const imageLibraryReal =
        useSelector(state=> state?.CityViewReducer?.imgReal)
    const selectedImage =
        useSelector(state=> state?.CityViewReducer?.selectedImage)

    const isLoading =
        useSelector(state=> state?.CityViewReducer?.isLoading)


    return(<div>
        <h1>City View</h1>
        <h2>{selectedImage}</h2>
        {/*<p>{JSON.stringify(imageLibraryReal)}</p>*/}
        <input  type = "text"
                // onChange={evt=>dispatch(fetchImageReal(evt.target.value))}
                onChange={evt=>dispatch(userInput(evt.target.value))}
        />
        <button onClick={()=>{dispatch(selectImage(2))}}>
            <ion-icon name="search-outline" ></ion-icon>
        </button>


        {isLoading&&<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                         alt = "loading_img" />}


        {imageLibraryReal.length!==0&& <p>{imageLibraryReal[selectedImage].des}</p>}
        {imageLibraryReal.length!==0&& <img className="bgImg" src={imageLibraryReal[selectedImage].url} alt=""/>}
        <div className="imgLibrary">
        {

            imageLibraryReal.length!==0&&imageLibraryReal.map(
                (item,index)=>{
                    return (<img className="image" key = {index} src={item.url} alt={item.des}
                        onClick={()=>dispatch(selectImage(index))}
                    />)
                }
            )
        }
        </div>
    </div>);
}
export default CityView