import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Doctor } from 'src/doctors/schema/doctor.schema';

export type HospitalDocument = Hospital & Document;

@Schema()
export class Hospital {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    address: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }] })
    doctor: Doctor[];
}


export const HospitalSchema = SchemaFactory.createForClass(Hospital);