
console.log('test')
async function fetchKanye() {
    console.log('hello')
    const url = "https://api.kanye.rest"
    const response = await fetch(url)
   
    const data = await response.json()
    let quoteP = document.querySelector("#quoteP")
    console.log(quoteP)
    quoteP.textContent = data.quote

  
}

// fetchKanye()

const refreshButton = document.querySelector("#getQuote");

refreshButton?.addEventListener("click",fetchKanye)











