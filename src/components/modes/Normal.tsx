import { data } from "../../data/data";
import { escolhaRandom } from "../utils/escolhas";
import { ModesProps } from "../utils/interfaces";

function Normal({ setJogoAtivo, setEscolhaJ1, setEscolhaJ2 }: ModesProps) {
  const escolher = (escolha: string) => {
    setEscolhaJ1(escolha);
    setJogoAtivo(true);
    setEscolhaJ2(escolhaRandom());
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex justify-between min-w-[300px] lg:w-[500px]">
          <button
            className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem] border-[var(--colorPaper)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
            onClick={() => escolher("papel")}
          >
            <img src={data.iconPaper} className="lg:w-[72px]" alt="Paper" />
          </button>
          <button
            className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem] border-[var(--colorScissors)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
            onClick={() => escolher("tesoura")}
          >
            <img
              src={data.iconScissor}
              className="lg:w-[72px]"
              alt="Scissors"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-32 lg:w-52 bg-white h-32 lg:h-52 rounded-[50%] flex justify-center items-center border-[1rem] lg:border-[1.7rem]  border-[var(--colorRock)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("pedra")}
        >
          <img src={data.iconRock} className="lg:w-[72px]" alt="pedra" />
        </button>
      </div>
    </>
  );
}
export default Normal;
