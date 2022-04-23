import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import ZipCodesController from './zipcodes.controller';
import ZipCodesService from './zipcodes.service';

describe('ZipCodesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ZipCodesController],
      providers: [ZipCodesService],
    }).compile();
  });

  describe('getHistory', () => {
    it('should return an array with history', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(appController.getHistory()).toEqual([
        { country: 'US', info: 'test', zipcode: '12345' },
        { country: 'US', info: 'test2', zipcode: '67890' },
      ]);
    });
  });

  describe('getCodeInfoByCountryAndZipCode', () => {
    it('should return an error', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(() => {
        appController.getCodeInfoByCountryAndZipCode({
          countryCode: 'CO',
          zipcode: '123456',
        });
      }).toThrowError(
        new HttpException('zipInfo not found', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('getCodeInfoByCountryAndZipCode', () => {
    it('should return an zipcode info', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(
        appController.getCodeInfoByCountryAndZipCode({
          countryCode: 'US',
          zipcode: '12345',
        }),
      ).toEqual({ country: 'US', info: 'test', zipcode: '12345' });
    });
  });

  describe('clearHistory', () => {
    it('should return an empty array', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(appController.clearHistory()).toEqual([]);
    });
  });
});
