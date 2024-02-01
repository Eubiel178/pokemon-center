import { Available } from "../entities/available";

export interface AvaliableGateway {
  getAvailableDates(): Promise<Available>;
}
