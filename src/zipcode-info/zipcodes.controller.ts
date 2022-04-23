import { Controller, Get, Delete, Param } from '@nestjs/common';
import ZipCodesService from './zipcodes.service';

@Controller('zipcode')
export default class ZipCodesController {
  constructor(private readonly zipCodesService: ZipCodesService) {}

  @Get('history')
  getHistory() {
    return this.zipCodesService.getHistory();
  }

  @Get('/country/:countryCode/zipcode/:zipcode')
  getCodeInfoByCountryAndZipCode(@Param() params) {
    return this.zipCodesService.getCodeInfoByCountryAndZipCode(
      params.countryCode,
      params.zipcode,
    );
  }

  @Delete('history')
  clearHistory() {
    return this.zipCodesService.clearHistory();
  }
}
