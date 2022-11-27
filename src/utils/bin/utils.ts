import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://nejckrasevec.si', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mail@nejckrasevec.si');

  return 'Opening mail@nejckrasevec.si...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `Why use vi? Try 'nano'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `Why use vim? Try 'nano'.`;
};

export const nano = async (args: string[]): Promise<string> => {
  return `You have read only permission.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Really? Emacs? You should be using 'nano'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const cloud = async (args?: string[]): Promise<string> => {
  window.open('https://url.nejckrasevec.si/oblak', '_blank');

  return 'Opening Cloud...';
};

export const share = async (args?: string[]): Promise<string> => {
  window.open('https://url.nejckrasevec.si/share', '_blank');

  return 'Opening Share app...';
};

export const cv = async (args?: string[]): Promise<string> => {
  window.open('https://url.nejckrasevec.si/cv', '_blank');

  return 'Opening CV...';
};

export const bereal = async (args?: string[]): Promise<string> => {
  window.open('https://url.nejckrasevec.si/bereal', '_blank');

  return 'Opening Bereal...';
};

export const banner = (args?: string[]): string => {
  return `
  ███╗   ██╗███████╗     ██╗ ██████╗    ██╗  ██╗██████╗  █████╗ ███████╗███████╗██╗   ██╗███████╗ ██████╗
  ████╗  ██║██╔════╝     ██║██╔════╝    ██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
  ██╔██╗ ██║█████╗       ██║██║         █████╔╝ ██████╔╝███████║███████╗█████╗  ██║   ██║█████╗  ██║     
  ██║╚██╗██║██╔══╝  ██   ██║██║         ██╔═██╗ ██╔══██╗██╔══██║╚════██║██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     
  ██║ ╚████║███████╗╚█████╔╝╚██████╗    ██║  ██╗██║  ██║██║  ██║███████║███████╗ ╚████╔╝ ███████╗╚██████╗
  ╚═╝  ╚═══╝╚══════╝ ╚════╝  ╚═════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝ ╚═════╝

  Welcome on my terminal webiste!
  Type 'help' to see list of available commands.
`;
};