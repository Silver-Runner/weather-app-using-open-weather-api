import React, { useEffect, useState } from 'react'
import "./Index.css"
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetails from "./Components/TempAndDetails";
import Forecast from "./Components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [query, setQuery] = useState({q:'London'});
  const [weather, setWeather] = useState(null);
  const [units , setUnits] = useState('metric');
  const getWeather = async() => {
    const message = query.q ? query.q : 'curren location';
    toast.info(`Fetching weather data for ${message[0].toUpperCase()+message.slice(1)}`);
   await getFormattedWeatherData({...query,units}).then((data) => {
    toast.success(`Fetched weather data for ${message[0].toUpperCase()+message.slice(1)}`)
    setWeather(data);
   });
    
  };
  useEffect(() => {
    getWeather();
  },[query,units]);
  
  const formatBackground = () => {
      if(!weather) return "from-cyan-600 to-blue-700" ;
      const threshold = units === "metric" ? 20:60;
      if(weather.temp <= threshold) return "from-cyan-600 to-blue-700";
      return "from-yellow-600 to-orange-700";
  }
  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-tr shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather&&(
        <>
      <TimeAndLocation weather={weather}/>
      <TempAndDetails weather={weather} units={units}/>
      <Forecast title="3 hour step forecast" data={weather.hourly}/>
      <Forecast title="Daily Forecast" data={weather.daily}/>
        </>
      )}
      <ToastContainer autoClose={2500} theme='colored'/>
    </div>
  )
}

export default App
