import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController, DoctorsCallController } from './doctors.controller';
import { Doctor, DoctorSchema } from './schema/doctor.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Hospital, HospitalSchema } from 'src/hospitals/schemas/hospital.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]), 
  MongooseModule.forFeature([{name: Hospital.name, schema: HospitalSchema}])],
  controllers: [DoctorsController, DoctorsCallController],
  providers: [DoctorsService]
})
export class DoctorsModule { }
