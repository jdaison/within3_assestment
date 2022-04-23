import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import ZipInfo from './zipcodes.interface';

@Injectable()
export default class ZipCodesService {
  constructor(private httpService: HttpService) {}

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

  async getCodeInfoByCountryAndZipCode(country: string, zipcode: string) {
    let zipInfo = this.zipCodesInfo.find(
      (item) => item.country === country && item.zipcode === zipcode,
    );
    if (zipInfo) {
      this.zipCodesInfo.push(zipInfo);
      return zipInfo;
    } else {
      try {
        const response = await lastValueFrom(
          this.httpService.get(
            `http://api.zippopotam.us/${country}/${zipcode}`,
          ),
          { defaultValue: undefined },
        );
        zipInfo = { country, zipcode, info: response.data };
        if (this.zipCodesInfo.length == this.maxHistory) {
          this.zipCodesInfo.shift();
        }
        this.zipCodesInfo.push(zipInfo);
        return zipInfo;
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  }

  clearHistory() {
    this.zipCodesInfo.length = 0;
    return this.zipCodesInfo;
  }
}
