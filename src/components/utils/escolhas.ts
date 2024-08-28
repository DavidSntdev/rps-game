import { data } from "../../data/data";

export const iconEscolha = (escolha: string) => {
  if (escolha === "papel") {
    return data.iconPaper;
  } else if (escolha === "tesoura") {
    return data.iconScissor;
  } else {
    return data.iconRock;
  }
};

export const corEscolha = (escolha: string) => {
  if (escolha === "papel") {
    return "var(--colorPaper)";
  } else if (escolha === "tesoura") {
    return "var(--colorScissors)";
  } else {
    return "var(--colorRock)";
  }
};


export const escolhaRandom = () => {
  const n = Math.floor(Math.random() * 3);
  if (n === 0) {
    return "papel";
  } else if (n === 1) {
    return "tesoura";
  } else {
    return "pedra";
  }
};
