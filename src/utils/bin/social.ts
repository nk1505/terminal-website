import config from '../../../config.json';

export const social_media = async (args: string[]): Promise<string> => {
  window.open(`https://social.nejckrasevec.si`);

  return 'Opening Social media website...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://url.nejckrasevec.si/github`);

  return 'Opening Github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://url.nejckrasevec.si/linkedin`);

  return 'Opening Linkedin...';
};