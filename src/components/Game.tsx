import { data } from "../data/data";
import GamePlayJ1 from "./GamePlayJ1";
import GameResult from "./GameResult";

interface GameProps {
  score: number;
  setScore: (score: number) => void;
  isJogoAtivo: boolean;
  setJogoAtivo: (ativo: boolean) => void;
  escolhaJ1: string;
  setEscolhaJ1: (escolha: string) => void;
  escolhaJ2: string;
  setEscolhaJ2: (random: string) => void;
}

function Game({
  score,
  setScore,
  isJogoAtivo,
  setJogoAtivo,
  escolhaJ1,
  setEscolhaJ1,
  escolhaJ2,
  setEscolhaJ2,
}: GameProps) {
  return (
    <>
      <div className="flex justify-between w-full border-3 border-[var(--colorHeaderOutline)] rounded-lg p-3 items-center">
        <div className="p-2">
          <img src={data.iconLogo} alt="" className="w-24" />
        </div>
        <div className="h-full bg-white flex flex-col w-24 items-center py-3 rounded-md shadow-sm shadow-neutral-950">
          <p className="text-[var(--colorScoreText)] text-xs font-bold">
            S C O R E
          </p>
          <p className="text-[var(--colorDarkText)] text-5xl flex font-bold">
            {score}
          </p>
        </div>
      </div>
      {isJogoAtivo ? (
        <GameResult
          escolhaJ1={escolhaJ1}
          escolhaJ2={escolhaJ2}
          setJogoAtivo={setJogoAtivo}
        />
      ) : (
        <GamePlayJ1
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
        />
      )}
    </>
  );
}

export default Game;
