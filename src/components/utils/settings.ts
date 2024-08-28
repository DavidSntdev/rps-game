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

export const selectPort = (
  portugues: (value: boolean) => void,
  ingles: (value: boolean) => void
) => {
  portugues(true);
  ingles(false);
};

export const selectEng = (
  ingles: (value: boolean) => void,
  portugues: (value: boolean) => void
) => {
  ingles(true);
  portugues(false);
};
