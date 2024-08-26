import { useState, useEffect } from "react";
import { iconEscolha, corEscolha } from "./utils/escolhas";
import { resultado, winorlose } from "./utils/game";
import { Button } from "@nextui-org/react";

interface GameResultProps {
  escolhaJ1: string;
  escolhaJ2: string;
  setJogoAtivo: (ativo: boolean) => void;
  score: number;
  setScore: (score: number) => void;
}

function GameResult({
  escolhaJ1,
  escolhaJ2,
  setJogoAtivo,
  score,
  setScore,
}: GameResultProps) {
  const [isGameover, setGameover] = useState<boolean>(false);
  const [showEscolhaJ2, setShowEscolhaJ2] = useState<boolean>(false);
  const [borderColor, setBorderColor] = useState<string>("");

  useEffect(() => {
    const showEscolhaTimer = setTimeout(() => {
      setShowEscolhaJ2(true);
      setBorderColor(corEscolha(escolhaJ2));
    }, 1000);

    return () => clearTimeout(showEscolhaTimer);
  }, [escolhaJ2]);

  useEffect(() => {
    if (showEscolhaJ2) {
      const gameOverTimer = setTimeout(() => {
        setGameover(true);
      }, 1000);

      return () => clearTimeout(gameOverTimer);
    }
  }, [showEscolhaJ2, escolhaJ2]);

  const terminarJogo = () => {
    setJogoAtivo(false);
    winorlose(escolhaJ1, escolhaJ2, score, setScore);
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
            className={`w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] transition-all duration-1500 ${
              showEscolhaJ2 ? "opacity-100" : "opacity-0"
            }`}
            style={{ borderColor: borderColor }}
          >
            {showEscolhaJ2 && (
              <img src={iconEscolha(escolhaJ2)} alt={`Escolha ${escolhaJ2}`} />
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <p>T H E</p>
            <p>H O U S E</p>
            <p>P I C K E D</p>
          </div>
        </div>
      </div>
      {isGameover && (
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-6xl text-slate-100">
            {resultado(escolhaJ1, escolhaJ2)}
          </p>
          <Button
            color="primary"
            variant="solid"
            radius="sm"
            className="px-16 bg-slate-200 font-bold"
            onClick={terminarJogo}
          >
            <p className="text-[--colorShadow] font-bold">P L A Y</p>
            <p className="text-[--colorShadow] font-bold">A G A I N</p>
          </Button>
        </div>
      )}
    </>
  );
}

export default GameResult;
