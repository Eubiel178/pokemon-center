import { AxiosInstance } from "axios";
import { Region } from "@/@core/domain/entities/region";
import { RegionGateway } from "@/@core/domain/gateways/region.gateway";

export class RegionHttpGateway implements RegionGateway {
  constructor(private http: AxiosInstance) {}

  async getRegions(): Promise<Region[]> {
    return await this.http.get("/region").then((res) => {
      return res.data.results.map((element: { name: string; url: string }) => {
        const region = new Region({
          id: crypto.randomUUID(),
          name: element.name,
        });

        return region.toJson();
      });
    });
  }

  async getRegionByName(regionName: string): Promise<Region[]> {
    return await this.http.get(`/region/${regionName}`).then((res) => {
      return res.data.locations.map(
        (element: { name: string; url: string }) => {
          const region = new Region({
            id: crypto.randomUUID(),
            name: element.name,
          });

          return region.toJson();
        }
      );
    });
  }
}
