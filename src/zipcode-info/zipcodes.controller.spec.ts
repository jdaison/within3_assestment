import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import ZipCodesController from './zipcodes.controller';
import ZipCodesService from './zipcodes.service';

describe('ZipCodesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ZipCodesController],
      providers: [ZipCodesService],
    }).compile();
  });

  describe('getHistory', () => {
    it('should return an array without history', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(appController.getHistory().length).toBe(0);
    });
  });

  describe('getCodeInfoByCountryAndZipCode', () => {
    it('should return an error', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(async () => {
        await appController.getCodeInfoByCountryAndZipCode({
          countryCode: 'CO',
          zipcode: '12345',
        });
      }).rejects.toThrowError('Request failed with status code 404');
    });
  });

  describe('getCodeInfoByCountryAndZipCode', () => {
    it('should return an zipcode info', async () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(
        await appController.getCodeInfoByCountryAndZipCode({
          countryCode: 'US',
          zipcode: '12345',
        }),
      ).toEqual({
        country: 'US',
        zipcode: '12345',
        info: {
          country: 'United States',
          'country abbreviation': 'US',
          places: [
            {
              latitude: '42.8333',
              longitude: '-74.058',
              'place name': 'Schenectady',
              state: 'New York',
              'state abbreviation': 'NY',
            },
          ],
          'post code': '12345',

        },
      });
    });
  });

  describe('getCodeInfoByCountryAndZipCode', () => {
    it('should return an zipcode info', async () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(
        await appController.getCodeInfoByCountryAndZipCode({
          countryCode: 'US',
          zipcode: '90210',
        }),
      ).toEqual({
        country: 'US',
        zipcode: '90210',
        info: {
          country: 'United States',
          'country abbreviation': 'US',
          places: [
            {
              latitude: '34.0901',
              longitude: '-118.4065',
              'place name': 'Beverly Hills',
              state: 'California',
              'state abbreviation': 'CA',
            },
          ],
          'post code': '90210',
        },
      });
    });
  });

  describe('getHistory', () => {
    it('should return an array with history', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(appController.getHistory().length).toBe(2);
    });
  });

  describe('clearHistory', () => {
    it('should return an empty array', () => {
      const appController = app.get<ZipCodesController>(ZipCodesController);
      expect(appController.clearHistory()).toEqual([]);
    });
  });
});
