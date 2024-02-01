import { AvaliableHttpGateway } from "../infrastructure/gateways/avaliable-http.gateway";
import { Available } from "../domain/entities/available";

export class AvailableSchedulingUseCase {
  constructor(private avaliableHttpGateway: AvaliableHttpGateway) {}

  async execute(): Promise<Available> {
    return await this.avaliableHttpGateway.getAvailableDates();
  }
}
