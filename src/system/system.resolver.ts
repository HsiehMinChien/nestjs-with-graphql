import { Args, Query, Resolver } from "@nestjs/graphql";
import { SystemService } from "./system.service";
import { SystemDto } from "./dto/system.dto";

@Resolver("System")
export class SystemResolvers {
  constructor(private readonly systemService: SystemService) {}
  @Query("getPlatformInfo")
  async getPlatformInfo() {
    return await this.systemService.getPlatformInfo();
  }

  @Query("getAllUrl")
  async getAllUrl() {
    return await this.systemService.getAllUrl();
  }
}
