import { Module } from '@nestjs/common';
import ZipCodesController from './zipcodes.controller';
import ZipCodesService from './zipcodes.service';

@Module({
  imports: [],
  controllers: [ZipCodesController],
  providers: [ZipCodesService],
})
export class ZipCodeModule {}
