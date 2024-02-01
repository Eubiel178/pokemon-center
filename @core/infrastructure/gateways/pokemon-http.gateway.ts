import { AxiosInstance } from "axios";
import { Pokemon } from "@/@core/domain/entities/pokemon";
import { PokemonGateway } from "@/@core/domain/gateways/pokemon.gateway";

export class PokemonHttpGateway implements PokemonGateway {
  constructor(private http: AxiosInstance) {}

  public async getPokemons(): Promise<Pokemon[]> {
    return await this.http.get("/pokemon").then((res) =>
      res.data.results.map(
        (element: { name: string; url: string }) =>
          new Pokemon({
            id: crypto.randomUUID(),
            name: element.name,
          })
      )
    );
  }
}
