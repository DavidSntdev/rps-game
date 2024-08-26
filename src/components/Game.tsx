import { useState } from "react";
import { data } from "../data/data";
import { styleBackground } from "../data/style";

function Game() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [score, setScore] = useState<number>(0);
  return (
    <>
      <div className="flex justify-between w-full border-3 border-[var(--colorHeaderOutline)] rounded-lg p-3 items-center">
        <div className="p-2">
          <img src={data.iconLogo} alt="" className="w-24" />
        </div>
        <div className="h-full bg-white flex flex-col w-24 items-center py-3 rounded-md shadow-md shadow-zinc-900">
          <p className="text-[var(--colorScoreText)] text-xs font-bold">
            S C O R E
          </p>
          <p className="text-[var(--colorDarkText)] text-5xl flex font-bold">
            {score}
          </p>
        </div>
      </div>
      <div
        className="w-full h-72 flex flex-col justify-between"
        style={styleBackground(data.bgTriangle)}
      >
        <div className="flex justify-center w-full">
          <div className="flex justify-between min-w-[300px]">
            <div className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorPaper)]">
              <img src={data.iconPaper} alt="" />
            </div>
            <div className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorScissors)]">
              <img src={data.iconScissor} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-32 bg-white h-32 rounded-[50%] flex justify-center items-center border-[1rem] border-[var(--colorRock)]">
            <img src={data.iconRock} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
