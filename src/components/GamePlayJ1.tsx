import { data } from "../data/data";
import { styleBackground } from "../data/style";
import { escolhaRandom } from "./utils/escolhas";

interface GamePlayJ1Props {
  setJogoAtivo: (ativo: boolean) => void;
  setEscolhaJ1: (escolha: string) => void;
  setEscolhaJ2: (random: string) => void;
}

function GamePlayJ1({
  setJogoAtivo,
  setEscolhaJ1,
  setEscolhaJ2,
}: GamePlayJ1Props) {
  const escolher = (escolha: string) => {
    setEscolhaJ1(escolha);
    setJogoAtivo(true);
    setEscolhaJ2(escolhaRandom());
  };

  return (
    <div
      className="w-full h-72 flex flex-col justify-between"
      style={styleBackground(data.bgTriangle)}
    >
      <div className="flex justify-center w-full">
        <div className="flex justify-between min-w-[300px]">
          <button
            className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorPaper)] transition transform hover:scale-110 active:scale-90"
            onClick={() => escolher("papel")}
          >
            <img src={data.iconPaper} alt="Paper" />
          </button>
          <button
            className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorScissors)] transition transform hover:scale-110 active:scale-90"
            onClick={() => escolher("tesoura")}
          >
            <img src={data.iconScissor} alt="Scissors" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorRock)] transition transform hover:scale-110 active:scale-90"
          onClick={() => escolher("pedra")}
        >
          <img src={data.iconRock} alt="pedra" />
        </button>
      </div>
    </div>
  );
}

export default GamePlayJ1;
