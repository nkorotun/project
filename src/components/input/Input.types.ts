import {TIconNames} from '../icon/icon';

export interface IInput {
  placeholder: string;
  value: string;
  isSecure?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  type: TIconNames;
  hasError?: boolean;
}
