import React, { useState } from 'react';
import axios from "axios";
import Context from '../../Context';

import Salutation from '../salutation';
import WeatherSearch from '../WeatherSearch';
import WeatherData from '../WeatherData';
import Error from '../Error';





const Finder = () => {

    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState(null)
    const [error, setError] = useState(null)

    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.city.value
        if (!location) {
          return setError("Enter the name of a city"), setWeather(null)
        }
        const API_KEY = "602efc5294c51ad5e5b7b85753999734"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        setWeather(response.data.main)
        setCity(response.data.name)
        setError(null)
    }   

    weather && console.log(weather)

    return(
        <Context.Provider value={{ api_call, weather, city }} >
            <Salutation />
            <WeatherSearch  />
            { weather && <WeatherData /> }
            {error && <Error error={error} /> }
        </Context.Provider>
    )
    
}

export default Finder;
