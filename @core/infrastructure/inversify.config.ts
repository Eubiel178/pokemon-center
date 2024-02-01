import "reflect-metadata";
import { Container } from "inversify";

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
  ListRegionsUseCase,
  GetCitiesUsecase,
} from "../use-case";

export const Registry = {
  HttpAdapter: Symbol.for("HttpAdapter"),
  PokeApiAdapter: Symbol.for("PokeApiAdapter"),

  AvaliableGateway: Symbol.for("AvaliableHttpGateway"),
  PokemonGateway: Symbol.for("PokemonHttpGateway"),
  RegionGateway: Symbol.for("RegionHttpGateway"),

  AvailableSchedulingUseCase: Symbol.for("AvailableSchedulingUseCase"),
  ListPokemonsUseCase: Symbol.for("ListPokemonsUseCase"),
  ListRegionsUseCase: Symbol.for("ListRegionsUseCase"),
  GetCitiesUsecase: Symbol.for("GetCitiesUsecase"),
};

export const container = new Container();

//######### HTTP #########
container.bind(Registry.HttpAdapter).toConstantValue(http);
container.bind(Registry.PokeApiAdapter).toConstantValue(pokeApi);

//######### GATEWAYS #########
container.bind(Registry.AvaliableGateway).toDynamicValue((context) => {
  return new AvaliableHttpGateway(context.container.get(Registry.HttpAdapter));
});
container.bind(Registry.PokemonGateway).toDynamicValue((context) => {
  return new PokemonHttpGateway(context.container.get(Registry.PokeApiAdapter));
});
container.bind(Registry.RegionGateway).toDynamicValue((context) => {
  return new RegionHttpGateway(context.container.get(Registry.PokeApiAdapter));
});

//######### USE CASES #########
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
container.bind(Registry.ListRegionsUseCase).toDynamicValue((context) => {
  return new ListRegionsUseCase(context.container.get(Registry.RegionGateway));
});
container.bind(Registry.GetCitiesUsecase).toDynamicValue((context) => {
  return new GetCitiesUsecase(context.container.get(Registry.RegionGateway));
});
