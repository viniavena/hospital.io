import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController, DoctorsCallController } from './doctors.controller';
import { Doctor, DoctorSchema } from './schema/doctor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }])],
  controllers: [DoctorsController, DoctorsCallController],
  providers: [DoctorsService]
})
export class DoctorsModule { }
