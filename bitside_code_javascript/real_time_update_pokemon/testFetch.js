async function getPokemon(){
    try{
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        //fail respond below
        // let res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbrwwasaur');
        console.log(res.status);
        if(res.status !== 200){
            throw new Error('Failed to fetch Pokemon data');
        }else{
            const data = await res.json();
            console.log(data);
        }
    }catch(error){
        console.error(`Error: ${error}`);
    }
}

getPokemon()

//reference: https://youtu.be/AGWwa25ZlRY?si=vLogZ6afXNWyVlVG