import axios from '../../helpers/weather-api'
import {GET_WEATHER} from '../../contants/endpoints'
const getWeather = () => (dispatch) =>{
    // console.log(process.env.REACT_APP_API_KEY)
    axios.get(GET_WEATHER, {
        params: {
            id : 2742032,
            appid: process.env.REACT_APP_API_KEY,
            cnt : 5,
        },
    }).then((response) =>{
        console.log(response.data)
        dispatch({
            type: "GET_WEATHER_SUCESS",
            payload: response.data
        })
    }).catch(err =>{
        dispatch({
            type: "GET_WEATHER_FAIL",
            payload: err
        })
    })
}

export default getWeather