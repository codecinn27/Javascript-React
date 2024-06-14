var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Endpoint to get a random Pokémon
router.get('/random-pokemon', async (req, res) => {
  try {
      // Fetch a list of all Pokémon from the API
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
      const pokemonList = response.data.results;

      // Get a random Pokémon from the list
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const randomPokemon = pokemonList[randomIndex];

      // Fetch details of the random Pokémon
      const pokemonDetailsResponse = await axios.get(randomPokemon.url);
      const pokemonDetails = pokemonDetailsResponse.data;

      // Extract relevant data from the Pokémon details
      const pokemonData = {
          name: pokemonDetails.name,
          id: pokemonDetails.id,
          image: pokemonDetails.sprites.front_default,
          types: pokemonDetails.types.map(type => type.type.name),
      };

      // Send the random Pokémon data as the API response
      res.json(pokemonData);
  } catch (error) {
      console.error('Error fetching random Pokémon:', error);
      res.status(500).json({ error: 'Failed to fetch random Pokémon' });
  }
});

router.get('/pokemon', async(req,res)=>{
  try{
    // 'fetch' is typically used in web browsers, below is wrong
      //let res = await fetch('/random-pokemon');
      const response = await axios.get('http://localhost:3000/random-pokemon'); //use axios to fetch the random-pokemon route
      console.log(response.status);
      if(response.status !==200){
        throw new Error('Failed to fetch Pokemon data');
      }else{
        const pokemonData = response.data;
        console.log(pokemonData);
        res.render('pokemon', {pokemonData});
      }
  }catch(error){
      console.error('Error fetching random Pokémon:', error);
      res.status(500).json({ error: 'Failed to fetch random Pokémon' });
  }
})


module.exports = router;
