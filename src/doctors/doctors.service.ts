import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DoctorsService {

  constructor(@InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>) { }

  create(createDoctorDto: CreateDoctorDto) {
    const doctor = new this.doctorModel(createDoctorDto);
    return doctor.save();
  }

  findAll() {
    return this.doctorModel.find();
  }

  findOne(id: string) {
    return this.doctorModel.findById(id);
  }

  update(id: string, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorModel.findByIdAndUpdate({
      _id: id
    }, { $set: updateDoctorDto }, { new: true });
  }

  remove(id: string) {
    return this.doctorModel.deleteOne({ _id: id }).exec();
  }

  findAllOnCall() {
    return this.doctorModel.find({ onCall: true })
  }

  async toggleOnCall(id: string) {
    const doctor = await this.doctorModel.findById(id);
    const doctorPlan = !doctor?.onCall
    return this.doctorModel.findByIdAndUpdate({
      _id: id
    }, { $set: { onCall: doctorPlan } }, { new: true });

  }
}