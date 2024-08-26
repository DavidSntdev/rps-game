import { useState } from "react";
import { iconEscolha, corEscolha } from "./utils/escolhas";
import { Button } from "@nextui-org/react";

interface GameResultProps {
  escolhaJ1: string;
  escolhaJ2: string;
  setJogoAtivo: (ativo: boolean) => void;
}

function GameResult({ escolhaJ1, escolhaJ2, setJogoAtivo }: GameResultProps) {
  const [isGameover, setGameover] = useState<boolean>(true);
  const resultado = () => {
    if (escolhaJ1 === escolhaJ2) {
      return "DRAW";
    } else if (
      (escolhaJ1 === "pedra" && escolhaJ2 === "tesoura") ||
      (escolhaJ1 === "tesoura" && escolhaJ2 === "papel") ||
      (escolhaJ1 === "papel" && escolhaJ2 === "pedra")
    ) {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  };

  const terminarJogo = () => {
    setJogoAtivo(false);
  };

  return (
    <>
      <div className="flex justify-center items-start gap-12">
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem]"
            style={{ borderColor: corEscolha(escolhaJ1) }}
          >
            <img src={iconEscolha(escolhaJ1)} alt={`Escolha ${escolhaJ1}`} />
          </div>
          <div className="flex gap-2">
            <p>Y O U</p>
            <p>P I C K E D</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem]"
            style={{ borderColor: corEscolha(escolhaJ2) }}
          >
            <img src={iconEscolha(escolhaJ2)} alt={`Escolha ${escolhaJ2}`} />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <p>T H E</p>
            <p>H O U S E</p>
            <p>P I C K E D</p>
          </div>
        </div>
      </div>
      {!isGameover ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-6xl">{resultado()}</p>
          <Button
            color="primary"
            variant="solid"
            radius="sm"
            className="px-16"
            onClick={terminarJogo}
          >
            <p className="text-slate-900">P L A Y</p>
            <p className="text-slate-900">A G A I N</p>
          </Button>
        </div>
      )}
    </>
  );
}

export default GameResult;
