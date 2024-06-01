const apiKey = "bebd7204967fa82755ea0ff691d01fc0"
const searchInput = document.getElementById("search")
const title = document.getElementById("title")

async function search () {
    const searchValue = searchInput.value
    const apiFind = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric&lang=pt_br`).then (apiResponse => apiResponse.json())
    changeElements(apiFind)
}

document.addEventListener("keypress", ({key}) => {
    if(key === "Enter") {
        search()
    }
}) //Fim da parte de pesquisar e enviar como requerimento para a api

function changeElements (apiFind) {
    title = apiFind.name
}