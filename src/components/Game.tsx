import { data, dataBonus } from "../data/data";
import GamePlay from "./GamePlay";
import GameResult from "./GameResult";

interface GameProps {
  setScore: (score: number) => void;
  setScoreJ1: (score: number) => void;
  setScoreJ2: (score: number) => void;
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
  setTurno: React.Dispatch<React.SetStateAction<1 | 2>>;
  turno: 1 | 2;
  score: number;
  scoreJ1: number;
  scoreJ2: number;
  isJogoAtivo: boolean;
  pvp: boolean;
  escolhaJ1: string;
  escolhaJ2: string;
  language: string;
  mode: string;
}

function Game({
  setScore,
  setScoreJ1,
  setScoreJ2,
  setJogoAtivo,
  setEscolhaJ1,
  setEscolhaJ2,
  setTurno,
  turno,
  score,
  scoreJ1,
  scoreJ2,
  isJogoAtivo,
  pvp,
  escolhaJ1,
  escolhaJ2,
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
        <div className="flex h-full gap-3">
          {pvp && !isJogoAtivo && (
            <div className="h-full bg-white flex flex-col w-24 items-center lg:w-40 justify-center lg:border-1 lg:border-black py-3 rounded-md shadow-sm shadow-neutral-950">
              <p className="text-[var(--colorScoreText)] text-xs font-bold lg:text-lg">
                {language === "en"
                  ? "Turn:"
                  : language === "pt"
                  ? "Turno :"
                  : "Turno :"}
              </p>
              <p className="text-1xl lg:text-2xl flex font-bold text-[var(--colorDarkText)]">
                {turno === 1
                  ? language === "en"
                    ? "Player 1"
                    : language === "pt"
                    ? "Jogador 1"
                    : "Jugador 1"
                  : language === "en"
                  ? "Player 2"
                  : language === "pt"
                  ? "Jogador 2"
                  : "Jugador 2"}
              </p>
            </div>
          )}
          <div className="h-full bg-white flex flex-col w-24 items-center lg:w-40 justify-center lg:border-1 lg:border-black py-3 rounded-md shadow-sm shadow-neutral-950">
            {pvp ? (
              <p className="text-[var(--colorScoreText)] text-xs font-bold lg:text-lg">
                {language === "en" && "S C O R E B O A R D"}
                {language === "pt" && "P L A C A R"}
                {language === "es" && "M A R C A D O R"}
              </p>
            ) : (
              <p className="text-[var(--colorScoreText)] text-xs font-bold lg:text-base">
                {language === "en" && "S C O R E"}
                {language === "pt" && "P O N T U A Ç Ã O"}
                {language === "es" && "P U N T U A C I Ó N"}
              </p>
            )}
            {pvp ? (
              <p className="text-3xl lg:text-5xl flex font-bold text-[var(--colorDarkText)] gap-2">
                {scoreJ1}
                <span className="text-blue-900"> x </span>
                {scoreJ2}
              </p>
            ) : (
              <p className="text-[var(--colorDarkText)] text-5xl lg:text-7xl flex font-bold">
                {score}
              </p>
            )}
          </div>
        </div>
      </div>
      {isJogoAtivo ? (
        <GameResult
          setJogoAtivo={setJogoAtivo}
          setScore={setScore}
          setScoreJ1={setScoreJ1}
          setScoreJ2={setScoreJ2}
          escolhaJ1={escolhaJ1}
          escolhaJ2={escolhaJ2}
          language={language}
          score={score}
          scoreJ1={scoreJ1}
          scoreJ2={scoreJ2}
          mode={mode}
          pvp={pvp}
        />
      ) : (
        <GamePlay
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
          setTurno={setTurno}
          turno={turno}
          mode={mode}
          pvp={pvp}
        />
      )}
    </>
  );
}

export default Game;
