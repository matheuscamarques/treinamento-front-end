const mapRoute = {
    home: 'pages/home.html',
    about: 'pages/about.html'
}; // se não ta aqui ele é undefined. !undefined == true 

async function changeRouter(rota) {
    if (!mapRoute[rota]) return;
    // pesquisar o que é fetch 
    let data = await fetch(mapRoute[rota])
    let html = await data.text();
    document.getElementById('router').innerHTML = html;
}