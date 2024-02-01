import { Region } from "../domain/entities/region";
import { RegionGateway } from "../domain/gateways/region.gateway";

export class ListRegionUseCase {
  constructor(private regionGateway: RegionGateway) {}

  async execute(regionName?: string): Promise<Region[]> {
    if (regionName) {
      const region = await this.regionGateway.getRegionByName(regionName);

      return region;
    } else {
      const regions = await this.regionGateway.getRegions();

      return regions;
    }
  }
}
