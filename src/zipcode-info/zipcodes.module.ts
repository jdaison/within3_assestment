import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import ZipCodesController from './zipcodes.controller';
import ZipCodesService from './zipcodes.service';

@Module({
  imports: [HttpModule],
  controllers: [ZipCodesController],
  providers: [ZipCodesService],
})
export class ZipCodeModule {}
