import { Pokemon } from "../domain/entities/pokemon";
import { PokemonGateway } from "../domain/gateways/pokemon.gateway";

export class ListPokemonsUseCase {
  constructor(private pokemonGateway: PokemonGateway) {}

  async execute(): Promise<Pokemon[]> {
    return await this.pokemonGateway.getPokemons();
  }
}
