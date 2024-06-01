import sunIcon from "./img/sol.png";


export function Content (props) {
    return (
        <>
        <div className="row px-5 pt-5 pb-4" id="content">
            <div className="col-6 px-md-5 d-flex justify-content-center">
                <div>
                    <h1 id="title"></h1>
                    <p><img src="https://img.icons8.com/?size=100&id=17768&format=png&color=000000" alt="local"/>Local</p>

                    <h2>31°C</h2>
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
                    <p className="pt-1">4%</p>
                </div>
            </div>

            <div className="col-6 m-lg-4 m-2 d-flex justify-content-center" id="info">
                <div className="p-1">
                    <img src="https://img.icons8.com/?size=100&id=jjb7r7iIe27C&format=png&color=000000" alt="vento" className="img-fluid"/>
                    <p className="pt-1">7km/h</p>
                </div>
            </div>
        </div>
        </>
    )
}