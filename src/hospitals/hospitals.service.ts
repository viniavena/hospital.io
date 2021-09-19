import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital, HospitalDocument } from './schemas/hospital.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HospitalsService {

  constructor(@InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>) { }

  create(createHospitalDto: CreateHospitalDto) {
    const hospital = new this.hospitalModel(createHospitalDto);
    return hospital.save();
  }

  findAll() {
    return this.hospitalModel.find();
  }

  findOne(id: string) {
    return this.hospitalModel.findById(id);
  }

  update(id: string, updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalModel.findByIdAndUpdate({
      _id: id
    }, { $set: updateHospitalDto }, { new: true });
  }

  remove(id: string) {
    return this.hospitalModel.deleteOne({ _id: id }).exec();
  }
}
