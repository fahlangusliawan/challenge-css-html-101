function loadAnime(){
    //fetch
    fetch('anime.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('data-anime').innerHTML=""
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            document.getElementById("data-anime").innerHTML += 
            `<div class="card">
                <img src="${data[i].img}" alt=""
                <div class="card-body">
                    <h4>${data[i].name}</h4>
                    <p>${data[i].skill}</p>
                </div>
            </div>`    
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

loadAnime();