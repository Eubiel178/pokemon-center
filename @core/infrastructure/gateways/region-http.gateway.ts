import { AxiosInstance } from "axios";
import { Region } from "@/@core/domain/entities/region";
import { RegionGateway } from "@/@core/domain/gateways/region.gateway";

export class RegionHttpGateway implements RegionGateway {
  constructor(private http: AxiosInstance) {}

  public async getRegions(): Promise<Region[]> {
    return await this.http.get("/region").then((res) =>
      res.data.results.map(
        (element: { name: string; url: string }) =>
          new Region({
            id: crypto.randomUUID(),
            name: element.name,
          })
      )
    );
  }

  public async getRegionByName(regionName: string): Promise<Region[]> {
    return await this.http.get(`/region/${regionName}`).then((res) =>
      res.data.locations.map(
        (element: { name: string; url: string }) =>
          new Region({
            id: crypto.randomUUID(),
            name: element.name,
          })
      )
    );
  }
}
