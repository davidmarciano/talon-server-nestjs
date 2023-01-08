import { Controller, Get, Req, Query } from '@nestjs/common';
import { AuditService } from './audit.service';
import { Audit } from './audit.schema';
import type { FindQuery, TotalCountsQuery } from './audit.types';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get()
  async find(@Query() query: FindQuery): Promise<Audit[]> {
    return this.auditService.find(query);
  }

  @Get('/counts')
  async totalCounts(@Query() query: TotalCountsQuery): Promise<number> {
    return this.auditService.totalCounts(query);
  }

  @Get('/get-all-event-types')
  async getAllEventTypes(): Promise<string[]> {
    return this.auditService.getAllEventTypes();
  }
}
