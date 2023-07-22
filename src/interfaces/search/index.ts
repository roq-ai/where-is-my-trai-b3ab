import { TrainInterface } from 'interfaces/train';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchInterface {
  id?: string;
  train_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  train?: TrainInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  train_id?: string;
  user_id?: string;
}
