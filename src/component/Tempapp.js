import React, { useEffect, useState } from 'react';
import './css/style.css';
import pin2  from './css/pin.png';

const Tempapp = () => {
   
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect( () => {
       const fetchApi = async () =>{
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d249a8c181c171e60f25573c898b81f0`
             const respose = await fetch(url);
            // console.log(respose);
            const resJson = await respose.json();
           //console.log(resJson);
           setCity(resJson.main)
       }
       
        fetchApi();
    },[search])
    
     return(
         <div className="main1">
            <div className="box">
                <input type="search" className="inputField mt-5" onChange={ (event) => {
                      setSearch(event.target.value)
                }}   />

                {
                    !city ? (<p className="no-data"> No data found</p>):
                    <div>
                             <div className="info">
                                 <h1 className="location"><img src={pin2} alt="pin" className="loc-img" /> {search}</h1>
                                 <h3 className="temp">{city.temp}&deg;C</h3>
                                 <h5 className="tempmin">Min:{city.temp_min}&deg;C | Max:{city.temp_max}&deg;C</h5>

                             </div>
                         </div>
                }

           
          </div>
         </div>
     )



}

export default Tempapp;