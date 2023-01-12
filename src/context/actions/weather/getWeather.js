import axios from '../../helpers/weather-api'
import {GET_WEATHER} from '../../contants/endpoints'
const getWeather = () => (dispatch) =>{
    // console.log(process.env.REACT_APP_API_KEY)
    axios.get(GET_WEATHER, {
        params: {
            id : 2742032,
            appid: process.env.REACT_APP_API_KEY,
            // cnt : 5,
            units: "metric"
        },
    }).then((response) =>{
        var data = {...response.data}
        
        data.list = []
        data.list.push(response.data.list[0])
        
        let current_date_obj = new Date(data.list[0].dt_txt);
        let current_day = current_date_obj.getDate()
        for (let i = 0;  i < response.data.list.length; i++){
            let date_obj=new Date(response.data.list[i].dt_txt);
            let day = date_obj.getDate()
            if (day != current_day){
                data.list.push(response.data.list[i])
                current_day = day
            }else{
                continue
            }
        }
        data.list = data.list.slice(0, 5)
        dispatch({
            type: "GET_WEATHER_SUCESS",
            payload: data
        })
    }).catch(err =>{
        dispatch({
            type: "GET_WEATHER_FAIL",
            payload: err
        })
    })
}

export default getWeather