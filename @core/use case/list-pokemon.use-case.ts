import { Pokemon } from "../domain/entities/pokemon";
import { PokemonGateway } from "../domain/gateways/pokemon.gateway";

export class ListPokemonsUseCase {
  constructor(private pokemonGateway: PokemonGateway) {}

  async execute(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonGateway.getPokemons();

    return pokemons;
  }
}
