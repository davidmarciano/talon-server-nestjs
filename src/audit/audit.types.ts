export interface FindQuery {
  count: number;
  offset: number;
  event_type: string;
}

export interface TotalCountsQuery {
  event_type: string;
}