import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { camelCase, isEmpty } from 'lodash';
import { Audit, AuditDocument  } from './audit.schema';
import type { FindQuery, TotalCountsQuery } from './audit.types';

@Injectable()
export class AuditService {
  constructor(@InjectModel(Audit.name) private auditModel: Model<AuditDocument>) {}

  createFindObject = (event_type: string) => {
    if(event_type) {
      const eventTypesArray = event_type.split('__');
      return { eventType: eventTypesArray };
    }
  }

  async find(query: FindQuery): Promise<Audit[]> {
    if(isEmpty(query)) {
      return [];
    };

    const { count, offset, event_type } = query;
    const skip = count * offset;

    const findObject = this.createFindObject(event_type);

    const collection = findObject ? 
      this.auditModel.find(findObject) :
      this.auditModel.find();

    return await collection.sort({ time: -1 }).skip(skip).limit(count);
  }

  async totalCounts(query: TotalCountsQuery): Promise<number> {
    const { event_type } = query;

    const findObject = this.createFindObject(event_type);

    const collection = findObject ? 
      this.auditModel.find(findObject) :
      this.auditModel.find();

    return await collection.count();
  }

  async getAllEventTypes(): Promise<string[]> {
    return await this.auditModel.distinct('eventType').exec();
  };
}
