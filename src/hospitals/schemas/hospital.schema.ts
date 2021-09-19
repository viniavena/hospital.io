import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

}


export const HospitalSchema = SchemaFactory.createForClass(Hospital);