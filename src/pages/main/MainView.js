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
        <div>
        {
            weatherDataState.weatherData  && weatherDataState.weatherData.list.map((item) =>(
                <Card weather={item.weather[0]}/>
            ))
        }*/

        </div>
    )
  
}

export default MainView