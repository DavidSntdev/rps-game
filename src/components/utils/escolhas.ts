import { data, dataBonus } from "../../data/data";

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

export const escolhaRandomBonus = () => {
  const n = Math.floor(Math.random() * 5);
  if (n === 0) {
    return "papel";
  } else if (n === 1) {
    return "tesoura";
  } else if (n === 3) {
    return "pedra";
  } else if (n === 4) {
    return "spock";
  } else {
    return "lizard";
  }
};

export const iconEscolhaBonus = (escolha: string) => {
  if (escolha === "papel") {
    return data.iconPaper;
  } else if (escolha === "tesoura") {
    return data.iconScissor;
  } else if (escolha === "pedra") {
    return data.iconRock;
  } else if (escolha === "spock") {
    return dataBonus.iconSpock;
  } else {
    return dataBonus.iconLizard;
  }
};

export const corEscolhaBonus = (escolha: string) => {
  if (escolha === "papel") {
    return "var(--colorPaper)";
  } else if (escolha === "tesoura") {
    return "var(--colorScissors)";
  } else if (escolha === "pedra") {
    return "var(--colorRock)";
  } else if (escolha === "spock") {
    return "var(--colorCyan)";
  } else {
    return "var(--colorLizard)";
  }
};
