import { SelectOptionInterface } from "./SelectOptionInterface";

export interface SchedulingFormInterface {
  avaliableDates: SelectOptionInterface[];
  avaliableTimes: SelectOptionInterface[];
  regionsList: SelectOptionInterface[];
  pokemonList: SelectOptionInterface[];
}
