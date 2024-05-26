export function Nav () {
    return (
        <div className="d-flex justify-content-center pt-2" id="nav">
        <label htmlFor="search" className="m-4">
            <input type="text" id="search" placeholder="Insira a sua cidade" className="p-2 text-center" />
        </label>
        </div>
    )
}