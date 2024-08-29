export const selectRobo = (pvp: (value: boolean) => void) => {
  pvp(false);
};

export const selectPVP = (pvp: (value: boolean) => void) => {
  pvp(true);
};

export const modeNormal = (mode: (value: string) => void) => {
  mode("normal");
};
export const modeBonus = (mode: (value: string) => void) => {
  mode("bonus");
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
