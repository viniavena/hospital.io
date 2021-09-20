import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
    orm: string;

    @Prop()
    onCall: boolean;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);