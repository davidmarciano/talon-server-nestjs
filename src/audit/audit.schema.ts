import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuditDocument = HydratedDocument<Audit>;

interface User {
  name: string;
  email: string;
}

@Schema()
export class Audit {
  @Prop(raw({ name: { type: String }, email: { type: String } }))
  user: User;
  
  @Prop()
  os: string;

  @Prop()
  eventType: string;

  @Prop()
  severity: string;

  @Prop()
  time: string;
}

export const AuditSchema = SchemaFactory.createForClass(Audit);