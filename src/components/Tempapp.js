import React, { useEffect, useState } from 'react'
import './css/style.css';
import {WiHumidity} from 'react-icons/wi'
import {BiCurrentLocation} from 'react-icons/bi'
function Tempapp() {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("new delhi");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=12f938cd5a0898a9046cc797aca29786&units=metric`
            const resposnse=await fetch(url);
            const resjson=await resposnse.json();
            // console.log(resjon)
            setCity(resjson.main);
        }
        fetchApi();
    },[search])
  return (
    <>
    <div className='box'>
        <div>
            <h1>Weather App</h1>
        <div className='inputData'>
            <input type="search" className='inputField' onChange={(event)=>{setSearch(event.target.value)}}></input>
        </div>
    
    {!city?(
            <p>Not data found</p>
        ):(
            <div>
            <div className='info'>
        <h2 className='location'><BiCurrentLocation/> {search}</h2>
        <weather>
        <h4 className='temp'>{city.temp}° </h4>
        <h4><WiHumidity/> Humidity-{city.humidity}</h4>
        <h4>FeelsLike-{city.feels_like}</h4>
        <h6>Min-Temp{city.temp_min} Max-Temp{city.temp_max}</h6>
        </weather>
    </div>
    </div>
        )}
        </div>
    </div>
    </>
  )
}

export default Tempapp