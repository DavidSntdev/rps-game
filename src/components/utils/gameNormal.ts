export const winorlose = (
  pvp: boolean,
  j1: string,
  j2: string,
  score: number,
  scoreJ1: number,
  scoreJ2: number,
  setScore: (score: number) => void,
  setScoreJ1: (score: number) => void,
  setScoreJ2: (score: number) => void
) => {
  if (j1 !== j2) {
    if (
      (j1 === "pedra" && j2 === "tesoura") ||
      (j1 === "tesoura" && j2 === "papel") ||
      (j1 === "papel" && j2 === "pedra")
    ) {
      if (pvp) {
        setScoreJ1(scoreJ1 + 1);
      } else {
        setScore(score + 1);
      }
    } else {
      if (pvp) {
        setScoreJ2(scoreJ2 + 1);
      } else if (score > 0) {
        setScore(score - 1);
      }
    }
  }
};

export const resultado = (
  j1: string,
  j2: string,
  language: string,
  pvp: boolean
) => {
  if (j1 === j2) {
    if (language === "en") {
      return "DRAW";
    }
    if (language === "pt") {
      return "EMPATE";
    }
    if (language === "es") {
      return "PUESTO";
    }
  } else if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "tesoura" && j2 === "papel") ||
    (j1 === "papel" && j2 === "pedra")
  ) {
    if (pvp) {
      if (language === "en") {
        return "PLAYER 1 WIN";
      }
      if (language === "pt") {
        return "JOGADOR 1 GANHOU";
      }
      if (language === "es") {
        return "JUGADOR 1 GANASTE";
      }
    } else {
      if (language === "en") {
        return "YOU WIN";
      }
      if (language === "pt") {
        return "VOCÊ GANHOU";
      }
      if (language === "es") {
        return "TU GANASTE";
      }
    }
  } else {
    if (pvp) {
      if (language === "en") {
        return "PLAYER 2 WIN";
      }
      if (language === "pt") {
        return "JOGADOR 2 GANHOU";
      }
      if (language === "es") {
        return "JUGADOR 2 GANASTE";
      }
    } else {
      if (language === "en") {
        return "YOU LOSE";
      }
      if (language === "pt") {
        return "VOCÊ PERDEU";
      }
      if (language === "es") {
        return "TU PERDISTE";
      }
    }
  }
};
