import { data, dataBonus } from "../../data/data";
import { escolhaRandomBonus } from "../utils/escolhas";
import { ModesProps } from "../utils/interfaces";

function Bonus({ setJogoAtivo, setEscolhaJ1, setEscolhaJ2 }: ModesProps) {
  const escolher = (escolha: string) => {
    setEscolhaJ1(escolha);
    setJogoAtivo(true);
    setEscolhaJ2(escolhaRandomBonus());
  };
  return (
    <div>
      <div className="flex justify-center">
        <button
          className="w-24 h-24 bg-white lg:w-40 lg:h-40 rounded-[50%] flex justify-center items-center border-[0.7rem] lg:border-[1.3rem] border-[var(--colorScissors)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("tesoura")}
        >
          <img
            src={data.iconScissor}
            className="w-[35px] lg:w-[64px]"
            alt="Scissors"
          />
        </button>
      </div>
      <div className="flex justify-between mt-[-15px]">
        <button
          className="w-24 h-24 bg-white lg:w-40 lg:h-40 rounded-[50%] flex justify-center items-center pl-2 border-[0.7rem] lg:border-[1.3rem] border-[var(--colorCyan)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("spock")}
        >
          <img
            src={dataBonus.iconSpock}
            className="w-[35px] lg:w-[64px]"
            alt="Spock"
          />
        </button>
        <button
          className="w-24 h-24 bg-white lg:w-40 lg:h-40 rounded-[50%] flex justify-center items-center border-[0.7rem] lg:border-[1.3rem] border-[var(--colorPaper)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("papel")}
        >
          <img
            src={data.iconPaper}
            className="w-[35px] lg:w-[64px]"
            alt="Paper"
          />
        </button>
      </div>
      <div className="flex justify-between mt-3 px-10 lg:px-[70px]">
        <button
          className="w-24 h-24 bg-white lg:w-40 lg:h-40 rounded-[50%] flex justify-center items-center border-[0.7rem] lg:border-[1.3rem] border-[var(--colorLizard)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("lizard")}
        >
          <img
            src={dataBonus.iconLizard}
            className="w-[35px] lg:w-[64px]"
            alt="Lizard"
          />
        </button>
        <button
          className="w-24 h-24 bg-white lg:w-40 lg:h-40 rounded-[50%] flex justify-center items-center border-[0.7rem] lg:border-[1.3rem] border-[var(--colorRock)] transition transform hover:scale-110 active:scale-90 shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black]"
          onClick={() => escolher("pedra")}
        >
          <img
            src={data.iconRock}
            className="w-[35px] lg:w-[64px]"
            alt="Rock"
          />
        </button>
      </div>
    </div>
  );
}
export default Bonus;
