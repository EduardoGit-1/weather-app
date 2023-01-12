const weatherReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_WEATHER_SUCESS':
            return {
                ...state,
                weatherData : payload
            }
        case 'GET_WEATHER_FAIL':
            return {
                ...state,
                error: payload
            }   
        default:
            return state
    }
}
export default weatherReducer;