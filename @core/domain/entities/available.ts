interface AvailableProps {
  time: string[];
  date: string[];
}

export class Available {
  time: string[];
  date: string[];

  constructor(public props: AvailableProps) {
    this.time = props.time;
    this.date = props.date;
  }
}
