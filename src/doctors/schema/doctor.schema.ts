import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Hospital } from 'src/hospitals/schemas/hospital.schema';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    speciality: string;

    @Prop()
    crm: string;

    @Prop()
    onCall: boolean;

    @Prop( { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' } )
    hospital: Hospital;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);