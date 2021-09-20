import { Module } from '@nestjs/common';
import { HospitalsModule } from './hospitals/hospitals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:tedgiw-3mepjy-qyftYq@cluster0.07ne3.mongodb.net/test'), 
    HospitalsModule, 
    DoctorsModule, 
    PatientsModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
 