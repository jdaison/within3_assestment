import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import ZipInfo from './zipcodes.interface';

@Injectable()
export default class ZipCodesService {
  private maxHistory = 5;
  private zipCodesInfo: Array<ZipInfo> = [
    {
      country: 'US',
      zipcode: '12345',
      info: 'test',
    },
    {
      country: 'US',
      zipcode: '67890',
      info: 'test2',
    },
  ];

  getHistory() {
    return this.zipCodesInfo;
  }

  getCodeInfoByCountryAndZipCode(country: string, zipcode: string) {
    const zipInfo = this.zipCodesInfo.find(
      (item) => item.country === country && item.zipcode === zipcode,
    );
    if (zipInfo) {
      this.zipCodesInfo.push(zipInfo);
      return zipInfo;
    }
    throw new HttpException('zipInfo not found', HttpStatus.NOT_FOUND);
  }

  clearHistory() {
    this.zipCodesInfo.length = 0;
    return this.zipCodesInfo;
  }
}
