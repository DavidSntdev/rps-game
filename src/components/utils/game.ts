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

export const resultado = (j1: string, j2: string) => {
  if (j1 === j2) {
    return "DRAW";
  } else if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "tesoura" && j2 === "papel") ||
    (j1 === "papel" && j2 === "pedra")
  ) {
    return "YOU WIN";
  } else {
    return "YOU LOSE";
  }
};
