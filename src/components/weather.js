import React, { useState, useEffect } from 'react';

const Weather = () => {

    const [searchValue, setsearchValue] = useState('');
    const [weather, setWeather] = useState('');

    const getWeatherInfo = async () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&appid=389915f2957d480cd8f38600e7662958';

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeather(data.main);
            })
            .catch(error => {
                // handle the error
            });

    }

    // const getWeatherInfo = async () => {
    //     try {

    //         const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchValue + '&appid=389915f2957d480cd8f38600e7662958';

    //         const res = await fetch(url);
    //         const data = await res.json();
    //         const { temp } = data.main;
    //         setWeather(data.main)
    //         console.log(weather);


    //     } catch (error) {

    //         console.log(error);

    //     }

    // }

    // useEffect(() => {
    //     getWeatherInfo();
    // }, [])

    function chnageTodotext(e) {
        setsearchValue(e.target.value);
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text"
                    placeholder='Enter your city name'
                    value={searchValue}
                    onChange={(e => chnageTodotext(e))} />
                <button onClick={getWeatherInfo}>API</button>
            </div>
            {weather && (



                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Weather <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"></path></svg>
                        </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Feels like: {weather.feels_like}</li>
                        <li className="list-group-item">pressure: {weather.pressure}</li>
                        <li className="list-group-item">sea_level: {weather.sea_level}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">temp_max{weather.temp_max}</a>
                        <a href="#" className="card-link">temp_min{weather.temp_min}</a>
                    </div>
                </div>



            )}
        </div>
    )
}

export default Weather;