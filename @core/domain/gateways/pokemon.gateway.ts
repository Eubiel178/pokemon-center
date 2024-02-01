import { Pokemon } from "../entities/pokemon";

export interface PokemonGateway {
  getPokemons(): Promise<Pokemon[]>;
}
