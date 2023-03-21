//纯js object, 必须有type，才叫action
//action creators(to create actions)
// const myAction = {
//     type: 'fetchCity',
//     payload:1,
// }
import {ACCESS_KEY, FETCH_CITY, FETCH_CITY_REAL, FILTER_IMAGE, INPUT_CITY, LOADING, SELECTED_IMAGE} from "../const";
// const imgLibrary = [
//     'imageUrl1',
//     'imageUrl2',
//     'imageUrl3',
//     'imageUrl4',
// ]
export const fetchImage = () =>{
    //fetch()
    console.log("cityViewAction page")
    //thunk--middleware
    //Thunk middleware for Redux.
    //fetch API在这里属于异步函数，由于Reducer不允许asy改变state，所以这里通过thunk来把fetch变成sync
    return{
        type:FETCH_CITY,
        // payload:imgLibrary,
    }
}
export const fetchImageReal = (city)=> dispatch=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${city}&orientation=landscape`)
        .then(res=>res.json())
        .then(({results})=>{
            let newRes = results.map(item=>({
                url:item.urls.regular,
                des:item.alt_description
            }))
            console.log(newRes.length)
            console.log(newRes)

            dispatch({
                type: FETCH_CITY_REAL,
                imageLibrary: newRes,
            })
            dispatch({
                type: LOADING,
                payload:false,
            })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: LOADING,
                payload:false,
            })
        })

    // dispatch({
    //     type: '',
    //     imageLibrary: [],
    // })
}

export const selectImage = (selectedIndex)=>dispatch=>{
    dispatch(
        {
        type:SELECTED_IMAGE,
        payload:selectedIndex,
        }
    )
}

export const userInput = (value)=>dispatch=>{
    dispatch(
        {
            type:INPUT_CITY,
            payload:value,
        }
    )
}

//filter
export const filterImage=()=>{
    return{
        type:FILTER_IMAGE,
    }
}