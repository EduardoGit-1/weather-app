import cloudy_icon from '../../assets/svg/cloudy.svg'
const svg_icon = {
    "Clouds" : cloudy_icon,
    "Clear" : "",
    "Tornado" : "",
    "Mist" : "",
    "Smoke" : "",
    "Haze" : "",
    "Fog" : "",
    "Sand" : "",
    "Ash" : "",
    "Squall" : "",
    "Snow" : "",
    "Rain" : "",
    "Drizzle" : "",
    "Thunderstorm" : "",
}
const Card = ({weather}) => {
    //let icon = svg_icon[weather] ? svg_icon[weather] : "
    let icon = weather.icon
    console.log(icon)
    return(
        <div class = "card">
            <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        </div>
    )

}

export default Card