import { Module } from '@nestjs/common';
import { YksLisansController } from './yks-lisans.controller';
import { YksLisansService } from './yks-lisans.service';

@Module({
  controllers: [YksLisansController],
  providers: [YksLisansService]
})
export class YksLisansModule {}
