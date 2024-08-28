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
  console.log(styleBackground(data.bgTriangle));
  const escolher = (escolha: string) => {
    setEscolhaJ1(escolha);
    setJogoAtivo(true);
    setEscolhaJ2(escolhaRandom());
  };

  return (
    <div
      className="w-full h-72 lg:h-[450px] flex flex-col justify-between"
      style={styleBackground(data.bgTriangle)}
    >
      <div className="flex justify-center w-full">
        <div className="flex justify-between min-w-[300px] lg:w-[500px]">
          <button
            className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem] border-[var(--colorPaper)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_14px_2px_-6px_var(--colorBtnShadow)]"
            onClick={() => escolher("papel")}
          >
            <img src={data.iconPaper} className="lg:w-16" alt="Paper" />
          </button>
          <button
            className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem] border-[var(--colorScissors)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_14px_2px_-6px_var(--colorBtnShadow)]"
            onClick={() => escolher("tesoura")}
          >
            <img src={data.iconScissor} className="lg:w-16" alt="Scissors" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem]  border-[var(--colorRock)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_14px_2px_-6px_var(--colorBtnShadow)]"
          onClick={() => escolher("pedra")}
        >
          <img src={data.iconRock} className="lg:w-16" alt="pedra" />
        </button>
      </div>
    </div>
  );
}

export default GamePlayJ1;
