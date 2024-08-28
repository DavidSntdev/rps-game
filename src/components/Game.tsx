import { data, dataBonus } from "../data/data";
import GamePlayJ1 from "./GamePlayJ1";
import GameResult from "./GameResult";

interface GameProps {
  setScore: (score: number) => void;
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
  score: number;
  isJogoAtivo: boolean;
  escolhaJ1: string;
  escolhaJ2: string;
  language: string;
  mode: string;
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
  language,
  mode,
}: GameProps) {
  return (
    <>
      <div className="flex justify-between w-full border-3 border-[var(--colorHeaderOutline)] p-3 lg:p-4 lg:px-5 rounded-2xl items-center lg:w-6/12 lg:h-40">
        <div className="p-2">
          {mode === "normal" && (
            <img src={data.iconLogo} alt="" className="w-28 lg:w-44" />
          )}
          {mode === "bonus" && (
            <img src={dataBonus.iconLogo} alt="" className="w-24 lg:w-32" />
          )}
        </div>
        <div className="h-full bg-white flex flex-col w-24 items-center lg:w-40 justify-center lg:border-1 lg:border-black py-3 rounded-md shadow-sm shadow-neutral-950">
          <p className="text-[var(--colorScoreText)] text-xs font-bold lg:text-base">
            {language === "en" && "S C O R E"}
            {language === "pt" && "P O N T U A Ç Ã O"}
            {language === "es" && "P U N T U A C I Ó N"}
          </p>
          <p className="text-[var(--colorDarkText)] text-5xl lg:text-7xl flex font-bold">
            {score}
          </p>
        </div>
      </div>
      {isJogoAtivo ? (
        <GameResult
          escolhaJ1={escolhaJ1}
          escolhaJ2={escolhaJ2}
          setJogoAtivo={setJogoAtivo}
          score={score}
          setScore={setScore}
          language={language}
          mode={mode}
        />
      ) : (
        <GamePlayJ1
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
          mode={mode}
        />
      )}
    </>
  );
}

export default Game;
