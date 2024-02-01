import { Region } from "../domain/entities/region";
import { RegionGateway } from "../domain/gateways/region.gateway";

export class ListRegionsUseCase {
  constructor(private regionGateway: RegionGateway) {}

  async execute(): Promise<Region[]> {
    return await this.regionGateway.getRegions();
  }
}
