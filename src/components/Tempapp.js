import React, { useEffect, useState } from 'react'
import './css/style.css';
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
        <h2 className='location'><i className="fa-solid fa-location-dot"></i> {search}</h2>
        <h3 className='temp'>{city.temp}° </h3>
        <h3> Humidity-{city.humidity}</h3>
    </div>
    <div className='wave-one'></div>
    <div className='wave-two'></div>
    <div className='wave-three'></div>
    </div>
        )}
        </div>
    </div>
    </>
  )
}

export default Tempapp