import { useState, useEffect } from "react";
import {
  iconEscolha,
  corEscolha,
  corEscolhaBonus,
  iconEscolhaBonus,
} from "./utils/escolhas";
import { resultado, winorlose } from "./utils/gameNormal";
import { resultadoBonus, winorloseBonus } from "./utils/gameBonus";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

interface GameResultProps {
  setJogoAtivo: (ativo: boolean) => void;
  setScore: (score: number) => void;
  setScoreJ1: (score: number) => void;
  setScoreJ2: (score: number) => void;
  escolhaJ1: string;
  escolhaJ2: string;
  language: string;
  score: number;
  scoreJ1: number;
  scoreJ2: number;
  mode: string;
  pvp: boolean;
}

function GameResult({
  setJogoAtivo,
  setScore,
  setScoreJ1,
  setScoreJ2,
  escolhaJ1,
  escolhaJ2,
  score,
  scoreJ1,
  scoreJ2,
  language,
  mode,
  pvp,
}: GameResultProps) {
  const [isGameover, setGameover] = useState<boolean>(false); // tirar depois, ta resetando toda hora que mete rules
  const [showEscolhaJ2, setShowEscolhaJ2] = useState<boolean>(false);
  const [borderColor, setBorderColor] = useState<string>("");
  const borderJ1 =
    mode === "normal" ? corEscolha(escolhaJ1) : corEscolhaBonus(escolhaJ1);
  const iconJ1 =
    mode === "normal" ? iconEscolha(escolhaJ1) : iconEscolhaBonus(escolhaJ1);
  const iconJ2 =
    mode === "normal" ? iconEscolha(escolhaJ2) : iconEscolhaBonus(escolhaJ2);

  useEffect(() => {
    const showEscolhaTimer = setTimeout(() => {
      setShowEscolhaJ2(true);
      if (mode === "normal") {
        setBorderColor(corEscolha(escolhaJ2));
      } else {
        setBorderColor(corEscolhaBonus(escolhaJ2));
      }
    }, 1500);

    return () => clearTimeout(showEscolhaTimer);
  }, [escolhaJ2, mode]);

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
    if (mode === "normal") {
      winorlose(
        pvp,
        escolhaJ1,
        escolhaJ2,
        score,
        scoreJ1,
        scoreJ2,
        setScore,
        setScoreJ1,
        setScoreJ2
      );
    } else {
      winorloseBonus(
        pvp,
        escolhaJ1,
        escolhaJ2,
        score,
        scoreJ1,
        scoreJ2,
        setScore,
        setScoreJ1,
        setScoreJ2
      );
    }
  };

  const widthDesktop = window.innerWidth > 1024;

  return (
    <>
      <div className="flex justify-center items-start gap-12">
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-32 bg-white h-32 rounded-[50%]  lg:w-56 lg:h-56 lg:border-[1.8rem] flex justify-center items-center border-[1rem] transition-all transform duration-500 lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black] shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black]"
            style={{
              borderColor: borderJ1,
            }}
          >
            <img
              src={iconJ1}
              alt={`Escolha ${escolhaJ1}`}
              className="lg:w-[72px]"
            />
          </div>
          <div className="flex gap-2">
            <p>
              {pvp
                ? language === "en" && "P L A Y E R"
                : language === "en" && "Y O U"}
              {pvp
                ? language === "pt" && "J O G A D O R"
                : language === "pt" && "V O C Ê"}
              {pvp
                ? language === "es" && "J U G A D O R"
                : language === "es" && "T Ú"}
            </p>
            <p>
              {pvp ? "1" : language === "en" && "P I C K E D"}
              {pvp ? "" : language === "pt" && "E S C O L H E U"}
              {pvp ? "" : language === "es" && "E S C O G I Ó"}
            </p>
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
              {mode === "normal"
                ? resultado(escolhaJ1, escolhaJ2, language, pvp)
                : resultadoBonus(escolhaJ1, escolhaJ2, language, pvp)}
            </p>
            <Button
              color="primary"
              variant="solid"
              radius="sm"
              className="px-16 bg-slate-200 font-bold"
              onClick={terminarJogo}
            >
              <p className="text-[--colorShadow] font-bold">
                {language === "en" && "P L A Y"}
                {language === "pt" && "J O G A R"}
                {language === "es" && "J U G A R"}
              </p>
              <p className="text-[--colorShadow] font-bold">
                {language === "en" && "A G A I N"}
                {language === "pt" && "D E"}
                {language === "es" && "D E"}
              </p>
              {(language === "pt" || language === "es") && (
                <>
                  {language === "pt" && (
                    <p className="text-[--colorShadow] font-bold">N O V O</p>
                  )}
                  {language === "es" && (
                    <p className="text-[--colorShadow] font-bold">N U E V O</p>
                  )}
                </>
              )}
            </Button>
          </motion.div>
        )}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`w-32 h-32 rounded-[50%] lg:w-56 lg:h-56 lg:border-[1.8rem] flex justify-center items-center bg-white border-[1rem] lg:shadow-[inset_0_10px_6px_-2px_var(--colorBtnShadow),0px_8px_10px_-6px_black] shadow-[inset_0_8px_6px_-2px_var(--colorBtnShadow),0px_5px_10px_-6px_black]`}
            style={{
              borderColor: borderColor,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: showEscolhaJ2 ? 1 : 0.5,
              opacity: showEscolhaJ2 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            {showEscolhaJ2 && (
              <motion.img
                src={iconJ2}
                alt={`Escolha ${escolhaJ2}`}
                className="transition-opacity duration-1000 lg:w-[72px]"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </motion.div>
          <div className="flex flex-wrap gap-2 justify-center">
            {pvp ? (
              <p>
                {language === "en" && "P L A Y E R"}
                {language === "pt" && "J O G A D O R"}
                {language === "es" && "J U G A D O R"}
              </p>
            ) : (
              <>
                <p>
                  {language === "en" && "T H E"}
                  {language === "pt" && "A"}
                  {language === "es" && "L A"}
                </p>
                <p>
                  {language === "en" && "H O U S E"}
                  {language === "pt" && "C A S A"}
                  {language === "es" && "C A S A"}
                </p>
              </>
            )}
            <p>
              {pvp ? "2" : language === "en" && "P I C K E D"}
              {pvp ? "" : language === "pt" && "E S C O L H E U"}
              {pvp ? "" : language === "es" && "E L E G I D A"}
            </p>
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
          <p className="text-6xl text-slate-100 text-center">
            {mode === "normal"
              ? resultado(escolhaJ1, escolhaJ2, language, pvp)
              : resultadoBonus(escolhaJ1, escolhaJ2, language, pvp)}
          </p>
          <Button
            color="primary"
            variant="solid"
            radius="sm"
            className="px-16 bg-slate-200 font-bold"
            onClick={terminarJogo}
          >
            <p className="text-[--colorShadow] font-bold">
              {language === "en" && "P L A Y"}
              {language === "pt" && "J O G A R"}
              {language === "es" && "J U G A R"}
            </p>
            <p className="text-[--colorShadow] font-bold">
              {language === "en" && "A G A I N"}
              {language === "pt" && "D E"}
              {language === "es" && "D E"}
            </p>
            {(language === "pt" || language === "es") && (
              <>
                {language === "pt" && (
                  <p className="text-[--colorShadow] font-bold">N O V O</p>
                )}
                {language === "es" && (
                  <p className="text-[--colorShadow] font-bold">N U E V O</p>
                )}
              </>
            )}
          </Button>
        </motion.div>
      )}
    </>
  );
}

export default GameResult;
