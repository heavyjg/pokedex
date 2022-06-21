export async function getPokemon(pokemon) {
  

  let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon.toLowerCase());
  let json = await response.json();
  return json;
}