import eye from '../../assets/icons/eye.svg';
import mail from '../../assets/icons/mail.svg';
import test from '../../assets/icons/test.svg';

export type TIconsName = keyof typeof ICONS;

export const ICONS: {[key: string]: any} = {
  eye,
  mail,
  test,
};
