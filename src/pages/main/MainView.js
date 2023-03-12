import getWeather from '../../context/actions/weather/getWeather'
import weatherReducer from '../../context/reducer/weatherReducer'
import {useReducer, useEffect, useState} from 'react'
import Card from '../../components/card/Card'


const MainView = () => {
    const [weatherDataState, weatherDispatch] = useReducer(weatherReducer, {weatherData: {}, error: null, loading: false})
    const [location, setLocation] = useState()
    // let cities = require("../../assets/data/city.list.json")

    const handleLocationChange = (e) =>{
        setLocation(e.target.value)
    }
    
    const handleGetWeatherClick = () =>{
        getWeather(location)(weatherDispatch)
    }

    return(
        <div class = "box">
            <div class="container">
                <div class="input-wrapper">
                    <div id ="input-container" class ={`search-box-container ${weatherDataState.weatherData.list && 'move'}`}>
                        <div class={`search-box`}>
                            <i class="fa-solid fa-location-dot"></i>
                            <input type="text" placeholder="Enter your location" onChange={(e) => handleLocationChange(e)}/>
                            <button class="fa-solid fa-magnifying-glass" onClick={handleGetWeatherClick}></button>
                        </div>
                    </div>
                    {weatherDataState.error &&
                        <p>An error has occurred: {weatherDataState.error}.</p>
                    }
                    
                </div>
         
                <div class ="card-container">
                    <div class = {`card-grid-container ${weatherDataState.weatherData.list ? 'show' : weatherDataState.loading ? 'loading' : ''}`}>
                        <div class ="card-grid">
                        {
                            weatherDataState.weatherData.list && weatherDataState.weatherData.list.map((item) =>(
                                <Card weather={item.weather[0]} date_str = {item.dt_txt} weatherDetails = {item.main} wind ={item.wind.speed} />
                            ))
                        }

                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
    )
  
}

export default MainView