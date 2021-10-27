import eye from '../../assets/icons/eye.svg';
import mail from '../../assets/icons/mail.svg';
import test from '../../assets/icons/test.svg';
import close from '../../assets/icons/close.svg';
import home from '../../assets/icons/home.svg';
import camera from '../../assets/icons/camera.svg';
import profile from '../../assets/icons/profile.svg';
import lightning from '../../assets/icons/lightning.svg';
import gallery from '../../assets/icons/gallery.svg';
import reverse from '../../assets/icons/reverse.svg';
import circle from '../../assets/icons/circle.svg';
import map from '../../assets/icons/map.svg';

export type TIconsName = keyof typeof ICONS;

export const ICONS: {[key: string]: any} = {
  eye,
  mail,
  test,
  close,
  home,
  camera,
  profile,
  lightning,
  gallery,
  reverse,
  circle,
  map,
};
