import { useState } from "react";
import Game from "./components/Game";
import { data } from "./data/data";
import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import Settings from "./components/Settings";
import { GrClose } from "react-icons/gr";

function App() {
  const [isRulesActive, setRulesActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isJogoAtivo, setJogoAtivo] = useState<boolean>(false);
  const [escolhaJ1, setEscolhaJ1] = useState<string>("");
  const [escolhaJ2, setEscolhaJ2] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");

  const activeRules = () => {
    setRulesActive(!isRulesActive);
  };

  return (
    <main
      className={`h-screen flex flex-col justify-between items-center p-10`}
      style={{
        background: isRulesActive ? "var(--background-gradient)" : "",
      }}
    >
      <AnimatePresence>
        {isRulesActive ? (
          <motion.div
            key="rules"
            className="flex flex-col items-center justify-between h-screen w-screen py-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-4xl text-slate-300">
              {language === "en" && "RULES"}
              {language === "pt" && "REGRAS"}
              {language === "es" && "NORMAS"}
            </h1>
            <div>
              <img src={data.imgRules} alt="rules" />
            </div>
            <Button
              isIconOnly
              className="border-1 bg-transparent rounded-[50%]"
              variant="faded"
              aria-label="Close rules"
              onClick={activeRules}
            >
              <GrClose size={20} />
            </Button>
          </motion.div>
        ) : (
          <>
            <Game
              score={score}
              setScore={setScore}
              isJogoAtivo={isJogoAtivo}
              setJogoAtivo={setJogoAtivo}
              escolhaJ1={escolhaJ1}
              setEscolhaJ1={setEscolhaJ1}
              escolhaJ2={escolhaJ2}
              setEscolhaJ2={setEscolhaJ2}
              language={language}
            />
            <div className="flex gap-3 mb-8 px-8 py-2 lg:px-12 lg:mb-0 md:self-end">
              <Settings setLanguage={setLanguage} language={language} />
              <Button
                color="primary"
                variant="ghost"
                onClick={activeRules}
                className="rounded-lg text-white border-[rgba(255, 255, 255, 0.692)] lg:px-7"
              >
                {language === "en" && "R U L E S"}
                {language === "pt" && "R E G R A S"}
                {language === "es" && "N O R M A S"}
              </Button>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
