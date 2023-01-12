import getWeather from '../../context/actions/weather/getWeather'
import weatherReducer from '../../context/reducer/weatherReducer'
import {useReducer, useEffect} from 'react'
import Card from '../../components/card/Card'

const MainView = () => {
    const [weatherDataState, weatherDispatch] = useReducer(weatherReducer, {weatherData: {}, error: null})

    useEffect(()=>{
        getWeather()(weatherDispatch)
    },[])
   
    return(
        <div class = "card-grid-container">
            <div class ="card-grid">
            {
                weatherDataState.weatherData.list && weatherDataState.weatherData.list.map((item) =>(
                    <Card weather={item.weather[0]} date_str = {item.dt_txt} temp_details = {item.main}/>
                ))
            }

            </div>
        </div>
    )
  
}

export default MainView