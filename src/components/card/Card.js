import temp_icon from '../../assets/icons/temp.png'
import tempMax_icon from '../../assets/icons/max_temp.png'
import tempMin_icon from '../../assets/icons/min_temp.png'
import arrow_icon from '../../assets/icons/arrow_down.png'
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const Card = ({weather, date_str, temp_details}) => {
    //let icon = svg_icon[weather] ? svg_icon[weather] : "
    let icon = weather.icon
    
      
    var date_obj=new Date(date_str);  
    var month_index =date_obj.getMonth();
    let day = date_obj.getDate()
    let month = monthNames[month_index]
    return(
        <div class = "card">
            <div class = "card-title-div">
                <div class="card-top-logo">
                    <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                </div>
                <div style ={{marginLeft: 5}}>
                    <h1>{month} {day}</h1>
                </div>
            </div>
            <div class="card-main">
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
            </div>
            <div class="card-dropdown-button">
                <img style ={{width:28, height:28}}src = {arrow_icon}/>
            </div>
        </div>
    )

}

export default Card