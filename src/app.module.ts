import { Module } from '@nestjs/common';
import { ZipCodeModule } from './zipcode-info/zipcodes.module';
@Module({
  imports: [ZipCodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
