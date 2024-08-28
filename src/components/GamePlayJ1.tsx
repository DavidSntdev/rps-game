import { data, dataBonus } from "../data/data";
import { styleBackground } from "../data/style";
import Bonus from "./modes/Bonus";
import Normal from "./modes/Normal";

interface GamePlayJ1Props {
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
  mode: string;
}

function GamePlayJ1({
  setJogoAtivo,
  setEscolhaJ1,
  setEscolhaJ2,
  mode,
}: GamePlayJ1Props) {
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
        />
      )}
      {mode === "bonus" && (
        <Bonus
          setJogoAtivo={setJogoAtivo}
          setEscolhaJ1={setEscolhaJ1}
          setEscolhaJ2={setEscolhaJ2}
        />
      )}
    </div>
  );
}

export default GamePlayJ1;
