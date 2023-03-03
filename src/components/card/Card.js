import temp_icon from '../../assets/icons/temp.png'
import tempMax_icon from '../../assets/icons/max_temp.png'
import tempMin_icon from '../../assets/icons/min_temp.png'
import arrow_icon from '../../assets/icons/arrow_down.png'
import ordinal_suffix_of from '../../context/helpers/get_orginal'
import {useState, useCallback } from 'react'
import { useResizeDetector } from 'react-resize-detector';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const Card = ({weather, date_str, temp_details}) => {
    let icon = weather.icon
    let weather_description = weather.description.charAt(0).toUpperCase() + weather.description.slice(1)
    var date_obj=new Date(date_str);  
    var month_index =date_obj.getMonth();
    let day = date_obj.getDate()
    let month = monthNames[month_index]
    let [openState, setOpenState] = useState(false)
    let [cardDateX, setCardDateX] = useState("0px")
    const openCard = () =>{
        console.log(openState)
        setOpenState(!openState)
        console.log(`card-dropdown-button ${openState? "open" : ""}`)
    }

    const onResize = useCallback((width) => {
        let text_w = (width / 2) - 35
        setCardDateX(`${text_w}px`)
      }, []);
    
    const { width, height, ref } = useResizeDetector({onResize});


 
    return(
        <div ref={ref} class = "card" onClick={()=>openCard()}>
            <div class = "card-title-div">
                <div class="card-top-logo">
                    <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                </div>
                <div class="date-details" style ={{marginLeft:cardDateX}}>
                    
                    {/* <h1>{month}&nbsp;</h1>
                    <h1>{day}<span>{ordinal_suffix_of(day)}</span></h1> */}
                    <h1>{month} {day}<span>{ordinal_suffix_of(day)}</span></h1>
                </div>
            </div>
            <div class="weather-details">
                <p class="temperature">
                    {Math.round(temp_details.temp)}<span class="celcius-span">°C</span>
                </p>
                <p class="description">
                    {weather_description}
                </p>
            </div>
            <div class={`card-main-test ${openState? "open" : ""}`}>
                <p>just a random test</p>
                <p>just a random test</p>
                <p>just a random test</p>
                <p>just a random test</p>
                <p>just a random test</p>
            </div>
            {/* <div class="card-main">
                <div>
                    <div class="card-content-details">
                        <img style ={{width:28, height:28}}src = {temp_icon}/>
                        <p>
                            Temp: {Math.round(temp_details.temp)}ºC
                        </p>
                    </div>
                    <div class="card-content-details">
                        <img style ={{width:28, height:28}}src = {temp_icon}/>
                        <p>
                            Feels: {Math.round(temp_details.feels_like)}ºC
                        </p>
                    </div>
                </div>
                <div>
                <div class="card-content-details">
                        <img style ={{width:28, height:28}}src = {tempMax_icon}/>
                        <p>
                            Max Temp: {Math.round(temp_details.temp_max)}ºC
                        </p>
                    </div>
                    <div class="card-content-details">
                        <img style ={{width:28, height:28}}src = {tempMin_icon}/>
                        <p>
                            Min Temp: {Math.round(temp_details.temp_min)}ºC
                        </p>
                    </div>
                </div>
            </div> */}
            <div class={`card-dropdown-button`}>
                <img class = {`${openState? "open" : "notopen"}`} style ={{width:28, height:28}}src = {arrow_icon}/>
            </div>
        </div>
    )
    
}

export default Card