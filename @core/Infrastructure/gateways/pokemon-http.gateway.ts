import { AxiosInstance } from "axios";
import { Pokemon } from "@/@core/domain/entities/pokemon";
import { PokemonGateway } from "@/@core/domain/gateways/pokemon.gateway";

export class PokemonHttpGateway implements PokemonGateway {
  constructor(private http: AxiosInstance) {}

  async getPokemons(): Promise<Pokemon[]> {
    return await this.http.get("/pokemon").then((res) => {
      return res.data.results.map((element: { name: string; url: string }) => {
        const pokemon = new Pokemon({
          id: crypto.randomUUID(),
          name: element.name,
        });

        return pokemon.toJson();
      });
    });
  }
}
