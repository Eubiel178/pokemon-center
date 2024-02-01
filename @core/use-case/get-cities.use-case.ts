import { Region } from "../domain/entities/region";
import { RegionHttpGateway } from "../infrastructure/gateways";

export class GetCitiesUsecase {
  constructor(private regionHttpGateway: RegionHttpGateway) {}

  async execute(regionName: string): Promise<Region[]> {
    return await this.regionHttpGateway.getRegionByName(regionName);
  }
}
