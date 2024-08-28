export const selectRobo = (
  robo: (value: boolean) => void,
  pvp: (value: boolean) => void
) => {
  robo(true);
  pvp(false);
};

export const selectPVP = (
  pvp: (value: boolean) => void,
  robo: (value: boolean) => void
) => {
  pvp(true);
  robo(false);
};

export const selectNormal = (
  normal: (value: boolean) => void,
  bonus: (value: boolean) => void
) => {
  normal(true);
  bonus(false);
};
export const selectBonus = (
  bonus: (value: boolean) => void,
  normal: (value: boolean) => void
) => {
  bonus(true);
  normal(false);
};

export const selectPort = (language: (value: string) => void) => {
  language("pt");
};

export const selectEng = (language: (value: string) => void) => {
  language("en");
};

export const selectEsp = (language: (value: string) => void) => {
  language("es");
};
