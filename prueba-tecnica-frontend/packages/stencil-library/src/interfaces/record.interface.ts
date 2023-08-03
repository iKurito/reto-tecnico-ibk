import { RecordType } from '../data/record.data';

export interface IRecord {
  id: string;
  names: string;
  surnames: string;
  email: string;
  type: RecordType;
  dateString: string;
}
