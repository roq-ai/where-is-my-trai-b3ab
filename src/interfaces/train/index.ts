import { SearchInterface } from 'interfaces/search';
import { GetQueryInterface } from 'interfaces';

export interface TrainInterface {
  id?: string;
  name: string;
  current_location: string;
  created_at?: any;
  updated_at?: any;
  search?: SearchInterface[];

  _count?: {
    search?: number;
  };
}

export interface TrainGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  current_location?: string;
}
