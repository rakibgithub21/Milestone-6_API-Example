const qoutes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then( data => displayQoutes(data.quote))
}

const displayQoutes = qoute => {
    const qouteContainer = document.getElementById('qoutesContainer');
    qouteContainer.classList.add('bg');
    qouteContainer.innerText = qoute;
}