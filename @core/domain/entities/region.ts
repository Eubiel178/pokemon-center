interface RegionProps {
  id: string;
  name: string;
}

export class Region {
  id: string;
  name: string;

  constructor(public props: RegionProps) {
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
