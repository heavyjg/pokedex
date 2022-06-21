export async function getPokemon(pokemon) {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
  let json = await response.json();
  console.log(json);
  return json;
}