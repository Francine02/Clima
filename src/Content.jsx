import clearSky from "./img/ceulimpo.png"
import fewClouds from "./img/nublado.png"
import clouds from "./img/nuvens.png"
import cloudDark from "./img/nuvem.png"
import showerRain from "./img/chuva.png"
import rain from "./img/chuvisco.png"
import thunderstorm from "./img/tempestade.png"
import snow from "./img/neve.png"
import mist from "./img/neblina.png"
import React, { useState, useEffect } from 'react';
import { Error } from "./Error"

export function Content () {
    const [weatherData, setWeatherData] = useState(null)
    const [hasError, setError] = useState(false)
    const apiKey = "bebd7204967fa82755ea0ff691d01fc0"

    async function search () {
        const searchInput = document.getElementById("search")
        const searchValue = searchInput.value.trim()
        if (searchValue === "") return
        try {
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric&lang=pt_br`);
            if (!apiResponse.ok) {
                throw new Error(`Error: ${apiResponse.statusText}`)
            }
            const apiFind = await apiResponse.json()
            setWeatherData(apiFind)
            console.log(apiFind)
            setError(false)
        } catch (error) {
            console.error("Erro ao buscar dados da API", error)
            setError(true)
        }
    }

    useEffect(() => { //Um hook que permite executar efeitos colaterais em componentes funcionais. Aqui, é usado para adicionar e remover um ouvinte de evento.
        const handleKeyPress = ({ key }) => {
            if (key === "Enter") {
                search();
            }
        };
        document.addEventListener("keypress", handleKeyPress);
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [search])//Adiciona o ouvinte de eventos keypress quando o componente é montado e o remove quando é desmontado.

    function icon () {
        const weatherIcon = weatherData.weather[0].description.toLowerCase()
        
        switch (weatherIcon) {
            case "céu limpo":
                return clearSky

            case "chuva moderada":
                return showerRain;

            case "nublado":
                return cloudDark

            case "algumas nuvens":
                return fewClouds;

            case "nuvens dispersas":
                return clouds
            
            case "neve":
                return snow;

            case "chuva":
                return rain

            case "trovoada":
                return thunderstorm;
                
            case "névoa":
                return mist;

            default:
                return brokenClouds;
        }
    }

    if (hasError) {
        return <Error />;
    }

    return (
        <div className="container" style={{ display: weatherData ? 'block' : 'none' }}>
            <div className="row px-lg-5 pt-lg-3 pt-5 pb-5 mt-md-0 mt-5" id="content">
                <div className="col-lg-6 col-8 pl-lg-5 pl-2">
                    <div className="pt-lg-4">
                        <h1 id="title">{weatherData ? weatherData.name : ""}</h1>
                        <p><img src="https://img.icons8.com/?size=100&id=17768&format=png&color=000000" alt="local"/>{weatherData ? weatherData.sys.country : ""}</p>

                        <h2>{weatherData ? weatherData.main.temp.toFixed(0) + "°C" : ""}</h2>
                    </div>
                </div>
                
                <div className="col-lg-6 col-4 pr-lg-5 pr-2 d-flex justify-content-end">
                    <img src={weatherData ? icon() : ""} alt="clima"  id="clima"/>
                    
                </div>
            </div>

            <div className="row px-lg-5 d-flex justify-content-center text-center">
                <div className="col-6 m-lg-4 m-3 d-flex justify-content-center" id="info">
                    <div className="p-1">
                        <img src="https://img.icons8.com/?size=100&id=4iKImf8GW8Sy&format=png&color=000000" alt="humidade" className="img-fluid"/>
                        <p className="pt-1">{weatherData ? weatherData.main.humidity + "%" : ""}</p>
                    </div>
                </div>

                <div className="col-6 m-lg-4 m-3 d-flex justify-content-center" id="info">
                    <div className="p-1">
                        <img src="https://img.icons8.com/?size=100&id=jjb7r7iIe27C&format=png&color=000000" alt="vento" className="img-fluid"/>
                        <p className="pt-1">{weatherData ? Math.round(weatherData.wind.speed) + "km/h" : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
