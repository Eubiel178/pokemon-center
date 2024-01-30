export class SchedulingService {
  formatDates(dateList: string[]) {
    const formattedDates = dateList.map((date: string, index: number) => {
      const [month, day, year] = date.split("/");

      const formattedMonth = month.padStart(2, "0");
      const formattedDay = day.padStart(2, "0");
      const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

      return {
        key: index,
        label: formattedDate,
        value: date,
      };
    });

    return formattedDates;
  }

  formatTimes(timeList: string[]) {
    const formattedTimes = timeList.map((time: string, index: number) => {
      return {
        key: index,
        label: time,
        value: time,
      };
    });

    return formattedTimes;
  }

  formatRegions(regionsList: { name: string; url: string }[]): {
    key: number;
    label: string;
    value: string;
  }[] {
    const formattedRegions = regionsList.map((region, index) => {
      return {
        key: index,
        label: region.name,
        value: region.name,
      };
    });

    return formattedRegions;
  }

  formatCitys(cityList: { name: string; url: string }[]) {
    const formattedCitys = cityList.map((city, index) => {
      return {
        key: index,
        label: city.name,
        value: city.name,
      };
    });

    return formattedCitys;
  }

  formatPokemons(pokemonList: { name: string; url: string }[]) {
    const formattedPokemons = pokemonList.map((pokemon, index) => {
      return {
        key: index,
        label: pokemon.name,
        value: pokemon.name,
      };
    });

    return formattedPokemons;
  }
}
