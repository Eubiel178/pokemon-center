import { AxiosInstance } from "axios";
import { Available } from "@/@core/domain/entities/available";
import { AvaliableGateway } from "@/@core/domain/gateways/available.gateway";

export class AvaliableHttpGateway implements AvaliableGateway {
  constructor(private http: AxiosInstance) {}

  public async getAvailableDates(): Promise<Available> {
    const [date, time] = await Promise.all([
      this.http.get("/scheduling/date"),
      this.http.post("/scheduling/time", {}),
    ]);

    return new Available({
      date: date.data,
      time: time.data,
    });
  }
}
