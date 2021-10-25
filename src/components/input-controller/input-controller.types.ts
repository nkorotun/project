import {Control} from 'react-hook-form';

export interface IContollerInput {
  control: Control<Record<string, any>, object>;
  errors: {[x: string]: {message: string}};
  name: string;
  placeholder: string;
  type: string;
  isSecure?: boolean;
}
