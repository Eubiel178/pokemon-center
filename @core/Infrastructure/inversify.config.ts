import { Container } from "inversify";
import "reflect-metadata";

import { http } from "./http";
import { pokeApi } from "./pokeApi";

import {
  AvaliableHttpGateway,
  PokemonHttpGateway,
  RegionHttpGateway,
} from "./gateways";
import {
  AvailableSchedulingUseCase,
  ListPokemonsUseCase,
  ListRegionUseCase,
} from "../use case";

export const Registry = {
  HttpAdapter: Symbol.for("HttpAdapter"),
  PokeApiAdapter: Symbol.for("PokeApiAdapter"),

  AvaliableGateway: Symbol.for("AvaliableHttpGateway"),
  PokemonGateway: Symbol.for("PokemonHttpGateway"),
  RegionGateway: Symbol.for("RegionHttpGateway"),

  AvailableSchedulingUseCase: Symbol.for("AvailableSchedulingUseCase"),
  ListPokemonsUseCase: Symbol.for("ListPokemonsUseCase"),
  ListRegionUseCase: Symbol.for("ListRegionUseCase"),
};

export const container = new Container();

container.bind(Registry.HttpAdapter).toConstantValue(http);
container.bind(Registry.PokeApiAdapter).toConstantValue(pokeApi);

container.bind(Registry.AvaliableGateway).toDynamicValue((context) => {
  return new AvaliableHttpGateway(context.container.get(Registry.HttpAdapter));
});
container.bind(Registry.PokemonGateway).toDynamicValue((context) => {
  return new PokemonHttpGateway(context.container.get(Registry.PokeApiAdapter));
});
container.bind(Registry.RegionGateway).toDynamicValue((context) => {
  return new RegionHttpGateway(context.container.get(Registry.PokeApiAdapter));
});

container
  .bind(Registry.AvailableSchedulingUseCase)
  .toDynamicValue((context) => {
    return new AvailableSchedulingUseCase(
      context.container.get(Registry.AvaliableGateway)
    );
  });
container.bind(Registry.ListPokemonsUseCase).toDynamicValue((context) => {
  return new ListPokemonsUseCase(
    context.container.get(Registry.PokemonGateway)
  );
});
container.bind(Registry.ListRegionUseCase).toDynamicValue((context) => {
  return new ListRegionUseCase(context.container.get(Registry.RegionGateway));
});
