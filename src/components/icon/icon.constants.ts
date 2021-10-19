import eye from './../../assets/icons/eye.svg';
import mail from './../../assets/icons/mail.svg';

export const ILLUSTRATIONS = {
};

export const MOODS = {
};

export const MOODS_ACTIVE = {
};

export const ICONS = {
  eye,
  mail,
  ...ILLUSTRATIONS,
  ...MOODS_ACTIVE,
  ...MOODS,
};

export type TIllustrationNames = keyof typeof ILLUSTRATIONS;
