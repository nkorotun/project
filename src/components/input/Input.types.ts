import {TIconNames} from '../icon/icon';

export interface IInput {
  placeholder: string;
  value: string;
  isSecure?: boolean;
  onChangeText: any;
  type: TIconNames;
}
