import {
  getAvailableDates,
  getAvailableTimes,
} from "@/services/apiLocal/scheduling";

import { getOneRegion, getRegions } from "@/services/pokeApi/region";
import { getPokemons } from "@/services/pokeApi/pokemon";

// interface SchedulingRepositoryInterface {
//   availableDates: () => Promise;
//   availableTimes(): Promise;
//   regionsList(): Promise;
// }

export class SchedulingRepository {
  availableDates = async () => {
    const response = await getAvailableDates();

    return response;
  };

  async availableTimes() {
    const response = await getAvailableTimes();

    return response;
  }

  async regionsList() {
    const response = await getRegions();

    return response;
  }

  async region(regionName: string) {
    const response = await getOneRegion(regionName);

    return response;
  }

  async pokemonList() {
    const response = await getPokemons();

    return response;
  }
}
