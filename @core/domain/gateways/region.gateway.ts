import { Region } from "../entities/region";

export interface RegionGateway {
  getRegions(): Promise<Region[]>;
  getRegionByName(regionName: string): Promise<Region[]>;
}
