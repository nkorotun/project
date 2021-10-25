import eye from '../../assets/icons/eye.svg';
import mail from '../../assets/icons/mail.svg';
import test from '../../assets/icons/test.svg';
import close from '../../assets/icons/close.svg';

export type TIconsName = keyof typeof ICONS;

export const ICONS: {[key: string]: any} = {
  eye,
  mail,
  test,
  close,
};
