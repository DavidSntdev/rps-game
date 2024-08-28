export const winorlose = (
  j1: string,
  j2: string,
  score: number,
  setScore: (score: number) => void
) => {
  if (j1 !== j2) {
    if (
      (j1 === "pedra" && j2 === "tesoura") ||
      (j1 === "tesoura" && j2 === "papel") ||
      (j1 === "papel" && j2 === "pedra")
    ) {
      setScore(score + 1);
    } else {
      if (score > 0) {
        setScore(score - 1);
      }
    }
  }
};

export const resultado = (j1: string, j2: string, language: string) => {
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
    if (language === "en") {
      return "YOU WIN";
    }
    if (language === "pt") {
      return "VOCÊ GANHOU";
    }
    if (language === "es") {
      return "TU GANASTE";
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
};
