import sunIcon from "./img/sol.png";
import React, { useState} from 'react';

export function Content () {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "bebd7204967fa82755ea0ff691d01fc0"

    async function search () {
        const searchInput = document.getElementById("search")
        const searchValue = searchInput.value.trim();
        if (searchValue === "") return; 
        try {
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric&lang=pt_br`);
            if (!apiResponse.ok) {
                throw new Error(`Error: ${apiResponse.statusText}`);
            }
            const apiFind = await apiResponse.json();
            setWeatherData(apiFind);
        } catch (error) {
            console.error("Erro ao buscar dados da API", error);
        }
    }

    document.addEventListener("keypress", ({key}) => {
        if(key === "Enter") {
            search()
        } 
    }) //Fim da parte de pesquisar e enviar como requerimento para a api

    return (
        <>
        <div className="row px-5 pt-5 pb-4" id="content">
            <div className="col-6 px-md-5 d-flex justify-content-center">
                <div>
                    <h1 id="title">{weatherData ? weatherData.name : ""}</h1>
                    <p><img src="https://img.icons8.com/?size=100&id=17768&format=png&color=000000" alt="local"/>{weatherData ? weatherData.sys.country : ""}</p>

                    <h2>{weatherData ? weatherData.main.temp.toFixed(0) + "°C" : ""}</h2>
                </div>
            </div>
            
            <div className="col-6 d-flex justify-content-center">
                <img src={sunIcon} alt="clima" className="img-fluid" id="clima"/>
            </div>
        </div>

        <div className="row px-5 d-flex justify-content-center text-center">
            <div className="col-6 m-lg-4 m-2 d-flex justify-content-center" id="info">
                <div className="p-1">
                    <img src="https://img.icons8.com/?size=100&id=4iKImf8GW8Sy&format=png&color=000000" alt="humidade" className="img-fluid"/>
                    <p className="pt-1">{weatherData ? weatherData.main.humidity + "%" : ""}</p>
                </div>
            </div>

            <div className="col-6 m-lg-4 m-2 d-flex justify-content-center" id="info">
                <div className="p-1">
                    <img src="https://img.icons8.com/?size=100&id=jjb7r7iIe27C&format=png&color=000000" alt="vento" className="img-fluid"/>
                    <p className="pt-1">{weatherData ? Math.round(weatherData.wind.speed) + "km/h" : ""}</p>
                </div>
            </div>
        </div>
        </>
    )
}