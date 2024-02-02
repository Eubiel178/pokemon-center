interface PokemonProps {
  id: string;
  name: string;
}

export class Pokemon {
  id: string;
  name: string;

  constructor(public props: PokemonProps) {
    this.name = props.name;
    this.id = props.id;
  }

  public getName() {
    return this.name;
  }

  public getId() {
    return this.id;
  }

  public toJson() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
