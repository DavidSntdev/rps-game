import { useState } from "react";
import { data, dataBonus } from "../data/data";
import { styleBackground } from "../data/style";
import Bonus from "./modes/Bonus";
import Normal from "./modes/Normal";

interface GamePlayProps {
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
  mode: string;
  pvp: boolean;
}

function GamePlay({
  setJogoAtivo,
  setEscolhaJ1,
  setEscolhaJ2,
  mode,
  pvp,
}: GamePlayProps) {
  const [turno, setTurno] = useState<1 | 2>(1);
  const background = mode === "normal" ? data.bgTriangle : dataBonus.bgPentagon;
  return (
    <div
      className={`w-[300px] lg:w-[500px] h-72 lg:h-[450px] flex flex-col justify-between ${
        mode === "bonus" ? "lg:h-[500px]" : "lg:h-[450px]"
      }`}
      style={styleBackground(background)}
    >
      {mode === "normal" && (
        <Normal
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
          setTurno={setTurno}
          turno={turno}
          pvp={pvp}
        />
      )}
      {mode === "bonus" && (
        <Bonus
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
          setTurno={setTurno}
          turno={turno}
          pvp={pvp}
        />
      )}
    </div>
  );
}

export default GamePlay;
