const pokemons = ["charizard","bulbasaur","oddish","mankey","pikachu"]

const pokemonsObj = [
    {
        nome:"charizard",
        tipo:"fogo"
    },
    {
        nome:"bulbasaur",
        tipo:"planta"
    },
    {
        nome:"oddish",
        tipo:"planta"
    },
    {
        nome:"mankey",
        tipo:"lutador"
    },
    {
        nome:"pikachu",
        tipo:"eletrico"
    }
]

const lista = document.getElementById("lista");

const popularFor = () => {

    let body = "";

    for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
        const item = `
        <div class="alert alert-primary m-4" role="alert">
        Pokemon: ${pokemon}
        </div>
        
        `;
        body += item;
    }


    lista.innerHTML = body;

}




const popularForeach = () => {

    let body = "";

    pokemons.forEach((x,i) => {
        const item = `
        <div class="alert alert-primary m-4" role="alert">
        Pokemon: ${x}
        </div>
        
        `;
        body += item;
    })




    lista.innerHTML = body;

}

const popularMap = () => {
    var listaMapeada = pokemonsObj.map(x => {

        const item = `
        <div class="alert alert-${x.tipo == "fogo" ? "danger" : x.tipo == "planta" ? "success" : x.tipo == "lutador" ? "secondary" : x.tipo == "eletrico" ? "warning" : "light"} m-4" role="alert">
        Pokemon: ${x.nome}
        </div>
        
        `;
    
        return item;
    });

    let body = listaMapeada.join(" ");
    lista.innerHTML = body;

    console.log(listaMapeada);
   

}


/* 
popularFor(); */
/* popularForeach(); */
popularMap();