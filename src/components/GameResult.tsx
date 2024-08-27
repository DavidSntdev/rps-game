import { useState, useEffect } from "react";
import { iconEscolha, corEscolha } from "./utils/escolhas";
import { resultado, winorlose } from "./utils/game";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

interface GameResultProps {
  escolhaJ1: string;
  escolhaJ2: string;
  setJogoAtivo: (ativo: boolean) => void;
  score: number;
  setScore: (score: number) => void;
}

function GameResult({
  escolhaJ1,
  escolhaJ2,
  setJogoAtivo,
  score,
  setScore,
}: GameResultProps) {
  const [isGameover, setGameover] = useState<boolean>(false);
  const [showEscolhaJ2, setShowEscolhaJ2] = useState<boolean>(false);
  const [borderColor, setBorderColor] = useState<string>("");

  useEffect(() => {
    const showEscolhaTimer = setTimeout(() => {
      setShowEscolhaJ2(true);
      setBorderColor(corEscolha(escolhaJ2));
    }, 1500);

    return () => clearTimeout(showEscolhaTimer);
  }, [escolhaJ2]);

  useEffect(() => {
    if (showEscolhaJ2) {
      const gameOverTimer = setTimeout(() => {
        setGameover(true);
      }, 500);

      return () => clearTimeout(gameOverTimer);
    }
  }, [showEscolhaJ2, escolhaJ2]);

  const terminarJogo = () => {
    setJogoAtivo(false);
    winorlose(escolhaJ1, escolhaJ2, score, setScore);
  };

  const widthDesktop = window.innerWidth > 1024;

  return (
    <>
      <div className="flex justify-center items-start gap-12">
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 bg-white h-32 rounded-[50%]  lg:w-56 lg:h-56 lg:border-[2rem] flex justify-center items-center border-[1rem] transition-all transform duration-500 shadow-inner shadow-[var(--colorHeaderOutline)]"
            style={{ borderColor: corEscolha(escolhaJ1) }}
          >
            <img src={iconEscolha(escolhaJ1)} alt={`Escolha ${escolhaJ1}`} />
          </div>
          <div className="flex gap-2">
            <p>Y O U</p>
            <p>P I C K E D</p>
          </div>
        </div>
        {widthDesktop && isGameover && (
          <motion.div
            className="flex flex-col items-center justify-center self-center mx-10 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-6xl text-slate-100">
              {resultado(escolhaJ1, escolhaJ2)}
            </p>
            <Button
              color="primary"
              variant="solid"
              radius="sm"
              className="px-16 bg-slate-200 font-bold"
              onClick={terminarJogo}
            >
              <p className="text-[--colorShadow] font-bold">P L A Y</p>
              <p className="text-[--colorShadow] font-bold">A G A I N</p>
            </Button>
          </motion.div>
        )}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className={`w-32 h-32 rounded-[50%] lg:w-56 lg:h-56 lg:border-[2rem] flex justify-center items-center bg-white border-[1rem] shadow-inner shadow-[var(--colorHeaderOutline)]`}
            style={{ borderColor: borderColor }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: showEscolhaJ2 ? 1 : 0.5,
              opacity: showEscolhaJ2 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            {showEscolhaJ2 && (
              <motion.img
                src={iconEscolha(escolhaJ2)}
                alt={`Escolha ${escolhaJ2}`}
                className="transition-opacity duration-1000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            )}
          </motion.div>
          <div className="flex flex-wrap gap-2 justify-center">
            <p>T H E</p>
            <p>H O U S E</p>
            <p>P I C K E D</p>
          </div>
        </motion.div>
      </div>
      {!widthDesktop && isGameover && (
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <p className="text-6xl text-slate-100">
            {resultado(escolhaJ1, escolhaJ2)}
          </p>
          <Button
            color="primary"
            variant="solid"
            radius="sm"
            className="px-16 bg-slate-200 font-bold"
            onClick={terminarJogo}
          >
            <p className="text-[--colorShadow] font-bold">P L A Y</p>
            <p className="text-[--colorShadow] font-bold">A G A I N</p>
          </Button>
        </motion.div>
      )}
    </>
  );
}

export default GameResult;
