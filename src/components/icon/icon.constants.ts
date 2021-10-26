import eye from '../../assets/icons/eye.svg';
import mail from '../../assets/icons/mail.svg';
import test from '../../assets/icons/test.svg';
import close from '../../assets/icons/close.svg';
import home from '../../assets/icons/home.svg';
import camera from '../../assets/icons/camera.svg';
import profile from '../../assets/icons/profile.svg';

export type TIconsName = keyof typeof ICONS;

export const ICONS: {[key: string]: any} = {
  eye,
  mail,
  test,
  close,
  home,
  camera,
  profile,
};
