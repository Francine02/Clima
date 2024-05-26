/*const apiKey = "bebd7204967fa82755ea0ff691d01fc0"*/

export function Content () {
    return (
        <>
        <div className="row px-5 pt-5 pb-5" id="content">
            <div className="col-md-6 px-md-5 d-flex justify-content-center">
                <div>
                    <h1>Brasil</h1>
                    <p><img src="https://img.icons8.com/?size=100&id=17768&format=png&color=000000" alt="local"/>Local</p>

                    <h2>31°C</h2>
                </div>
            </div>
            
            <div className="col-md-6 px-md-5 d-flex justify-content-center">
                <img src="https://img.icons8.com/?size=100&id=0yCmzDVSxZ7O&format=png&color=000000" alt="clima" className="img-fluid"/>
            </div>
        </div>

        <div className="row px-5 d-flex justify-content-center text-center">
            <div className="col-md-6 px-md-5 m-4 d-flex justify-content-center" id="info">
                <div className="p-1">
                    <img src="https://img.icons8.com/?size=100&id=4iKImf8GW8Sy&format=png&color=000000" alt="humidade"/>
                    <p className="pt-1">4%</p>
                </div>
            </div>

            <div className="col-md-6 px-md-5 m-4 d-flex justify-content-center" id="info">
                <div className="p-1">
                    <img src="https://img.icons8.com/?size=100&id=jjb7r7iIe27C&format=png&color=000000" alt="vento"/>
                    <p className="pt-1">7km/h</p>
                </div>
            </div>
        </div>
        </>
    )
}